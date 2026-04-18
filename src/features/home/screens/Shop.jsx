import { Cross, Search, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { getProducts } from '../apis/AllProducts'
import {useDispatch, useSelector} from 'react-redux'
import { setProduct } from '../state/ProductSlice'
import ProductCard from '../components/ProductCard'
import { Outlet, useLocation, useSearchParams } from 'react-router'

const Shop = () => {
    let [searchParams]=useSearchParams()
    let category=searchParams.get('category')
    
    let [searchItem,setSearchItem]=useState({
      search:"",
      all:"All Categories",
      feature:"Featured"
    })
  let dispatch=useDispatch()
  let {products}=useSelector((state)=>state.products)
  let {isOpen}=useSelector((state)=>state.cartItems)
  let [showProducts,setShowProducts]=useState([])

 useEffect(() => {
  setShowProducts(products)
}, [products])

  useEffect(()=>{
     let updateShow=products
     if(category){
      updateShow=updateShow.filter((e)=>e.category.toLowerCase()==category.toLowerCase())
     }
     if(searchItem.search!=""){
      updateShow=products.filter((e)=>e.category.toLowerCase().includes(search.toLowerCase()) || e.title.toLowerCase().includes(searchItem.search.toLowerCase()))
     }
     if(searchItem.all!="All Categories"){
      updateShow=products.filter((e)=>e.category.toLowerCase()==searchItem.all.toLowerCase() && (e.title.toLowerCase().includes(searchItem.search.toLowerCase()) || e.category.toLowerCase().includes(searchItem.search.toLowerCase())))
     } 
     if(searchItem.feature!="Featured"){
      if(searchItem.feature=="lth"){
        updateShow=[...updateShow].sort((a,b)=>a.price-b.price)
      }
      else if(searchItem.feature=="htl"){
        updateShow=[...updateShow].sort((a,b)=>b.price-a.price)
      }
      else if(searchItem.feature=="tr"){
        updateShow=[...updateShow].sort((a,b)=>b.rating-a.rating)
      }
      else{
         updateShow=[...updateShow].sort((a,b)=>a.rating-b.rating)
      }
     }
     setShowProducts(updateShow)
  },[products,searchItem,category])

  useEffect(()=>{
      const load=async()=>{
          let res=await getProducts()
          dispatch(setProduct(res))
      }
      load()
  },[])
  let {pathname}=useLocation()
 
  return (
    <div className={`w-full flex flex-col ${isOpen?"pointer-events-none":""}`}>
      {
        pathname=='/home/shop'? 
        <div className='flex flex-col gap-10 px-40 w-full'>
         <div className='flex flex-col gap-2'>
               <h1 className='text-4xl font-bold'>All Products</h1>

               <h3 className='text-sm text-white/50'>{showProducts.length} products found</h3>
        </div>

        <div className='w-full border border-white rounded-2xl p-5 flex gap-5 items-center'>
          <div className='w-[70%] bg-[#1D1D1D] flex gap-3 items-center border border-[#485F6E] p-2 rounded-2xl focus-within:border-[#C2F400]'>
            <Search color='#707070' size={15}/>

            <input value={searchItem.search} onChange={(e)=>{
              setSearchItem({...searchItem,search:e.target.value})
            }}  className='w-full outline-0 ' type="text" placeholder='Search products...' />
          </div>

          <div className='flex flex-col gap-5 focus-within:border focus-within:border-[#C2F400] items-center bg-[#1D1D1D] border border-[#485F6E] p-2 px-3 rounded-2xl '>
              <select value={searchItem.all} onChange={(e)=>{
              setSearchItem({...searchItem,all:e.target.value})
            }}   className='w-full outline-0 cursor-pointer'>
                <option  className='bg-[#C8F400]  text-black' value="All Categories">All Categories</option>

                <option className='bg-black text-white' value="Beauty">Beauty</option>

                 <option className='bg-black text-white' value="Fragrances">Fragrances</option>

                  <option className='bg-black text-white' value="Furniture">Furniture</option>

                   <option className='bg-black text-white' value="Groceries">Groceries</option>
              </select>
          </div>

           <div className='flex gap-5 items-center focus-within:border focus-within:border-[#C2F400] bg-[#1D1D1D] border border-[#485F6E] p-2 px-3 rounded-2xl'>
              <select value={searchItem.feature} onChange={(e)=>{
              setSearchItem({...searchItem,feature:e.target.value})
            }}   className='w-full outline-0 cursor-pointer'>
                <option  className='bg-[#C8F400]  text-black' value="Featured">Featured</option>

                <option className='bg-black flex text-white' value="lth">Price:Low to High</option>

                 <option className='bg-black text-white' value="htl">Price:High to Low</option>

                  <option className='bg-black text-white' value="tr">Top Rated</option>

                   <option className='bg-black text-white' value="lr">Lowest Rated</option>
              </select>
          </div>

          {
            searchItem.search || searchItem.all!="All Categories" || searchItem.feature!="Featured"?
            <div onClick={()=>{
            setSearchItem({
               search:"",
               all:"All Categories",
               feature:"Featured"
            })
            setShowProducts(products)
          }} className='bg-[#321818] rounded-2xl p-2 border border-[#D35158] text-[#D35158] flex items-center gap-1 cursor-pointer'><X size={15}/> Clear</div>:null
          }
        </div>

        <div className='flex flex-wrap gap-3 '>
         {
            showProducts.map((elem)=>{
              return <ProductCard elem={elem} key={elem.id}/>
             })
         }
        </div>
       </div>:null
      }

      <Outlet/>
    </div>
  )
}

export default Shop
