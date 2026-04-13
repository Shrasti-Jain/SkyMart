import { ArrowLeft, Check, ChevronLeft, ChevronRight, Heart, Minus, Plus, RotateCcw, Shield, ShoppingCart, Star, Van } from 'lucide-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import ProductCard from '../components/ProductCard';
import { addCart, decreasequantity, increaseQuantity, openCart, removeItem } from '../state/CartSlice';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    let {id}=useParams()
    let {products}=useSelector((state)=>state.products)
    let navigate=useNavigate()
    let dispatch=useDispatch()
    let pro=products.find((elem)=>elem.id==id)
    let {category,title,thumbnail,rating,reviews,price,description}=pro
    let [fill,setFill]=useState(false)
    let relatedProducts=products.filter((elem)=>elem.category==category && elem.id!=id)
    let {cartItems}=useSelector((state)=>state.cartItems)
    let find=cartItems.find((e)=>e.id==id)
    console.log(find);
    
  return (
    <div className='w-full flex flex-col gap-8 px-40'>
      <div className='flex gap-2'>
        <h1 onClick={()=>navigate('/home/shop')} className='text-sm text-white/50 font-semibold cursor-pointer flex gap-2 items-center'><ArrowLeft size={15}/> Products /</h1>
        <h4  className='text-sm text-white/50 font-semibold cursor-pointer'>{category} /</h4>
        <h5  className='text-sm text-white/50 font-semibold cursor-pointer'>{title}</h5>
      </div>
      <div className='flex w-full h-160  gap-15'>
     <div className='w-[45%] h-[95%] flex items-center justify-center  bg-white rounded-2xl'>
             <img className='w-[60%] hover:scale-110 transition-all duration-300 cursor-pointer object-cover' src={thumbnail} alt={title} />
    </div>
    <div className='w-[45%] h-full flex flex-col gap-5'>
        <h3 className='bg-[#20250C] text-[#A8CD02] rounded-2xl border border-[#A8CD02] w-fit capitalize py-1 px-2 text-xs'>{category}</h3>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <div className='flex gap-1 items-center'>
            {
                Array.from({length:5}).map((e,i)=>{
                    return <Star size={20} color={i<rating?"#FBBF24":"#313130"} fill={i<rating?"#FBBF24":"#313131"}/>
                })
            }
            <h5 className='text-white/50 font-bold'>{rating}</h5>
            <h2 className='text-white/50 '>({reviews.length} reviews)</h2>
        </div>
        <hr />
        <h2 className='text-[#C8F400] font-bold text-3xl '>${price}</h2>
        <hr />
        <p></p>
        <p className='text-white/50 font-semibold text-sm'>{description}</p>
       {
        find? <div className='w-full border border-white rounded-2xl flex p-4 justify-between items-center'>
            <h4>In cart:</h4>
           
         <div className='flex gap-4 items-center'>
              <h4 onClick={()=>{
                toast.success("Quantity updated...")
                if(find.quantity==1){
                  dispatch(removeItem(find))
                  return toast.success("Item removed from cart")
                }
                dispatch(decreasequantity(find))
              }} className='border border-white/40 p-2 hover:bg-[#313131] rounded-xl cursor-pointer'><Minus size={15}/></h4>
              <h4>{find.quantity}</h4>
              <h4 onClick={()=>{
                toast.success("Quantity updated...")
                dispatch(increaseQuantity(find))
              }} className='border border-white/40 p-2 hover:bg-[#313131] rounded-xl cursor-pointer'><Plus size={15}/></h4>
            </div>
        </div>:""
       }
        <div className='flex gap-5'>
            {
              find?<button  className='font-semibold text-xl flex gap-3 bg-[#102819] w-[90%] py-3 items-center justify-center text-[#4ADE80] border border-[#228a48] rounded-2xl cursor-pointer'><Check size={18}/> Added to Cart</button>
              :<button onClick={()=>{
                dispatch(addCart({...pro,quantity:1}))
              }} className='font-semibold text-xl flex gap-3 bg-[#C8F400] w-[90%] py-3 items-center justify-center text-black rounded-2xl cursor-pointer'><ShoppingCart size={18}/> Add to Cart</button>
            }
     <div
  onClick={() => setFill(prev => !prev)}
  className={`group cursor-pointer border p-3 rounded-2xl flex items-center justify-center
    ${fill 
      ? 'bg-[#2F1515] border-[#F87171]' 
      : 'bg-black border-white/50 hover:border-[#F87171]'
    }`}
>
  <Heart
    size={18}
    fill={fill ? '#F87171' : 'none'}
   className={`${
    fill ? 'text-[#F87171]' : 'text-[#707070] group-hover:text-[#F87171]'
  }`}
  />
</div>
        </div>
            <div className='grid grid-cols-3 w-full gap-3'>
                <div className='border border-white rounded-2xl p-3 flex flex-col justify-center items-center'>
                    <Van color='#C8F400'/>
                    <h2 className='text-white/50 font-bold '>Free Delivery</h2>
                    <h4 className='text-white/48 text-sm'>On orders $50+</h4>
                </div>
             <div className='border border-white rounded-2xl p-3 flex flex-col justify-center items-center'>
                    <Shield color='#C8F400'/>
                    <h2 className='text-white/50 font-bold '>Secure Pay</h2>
                    <h4 className='text-white/48 text-sm'>256-bit SSL</h4>
                </div>
                 <div className='border border-white rounded-2xl p-3 flex flex-col justify-center items-center'>
                    <RotateCcw color='#C8F400'/>
                    <h2 className='text-white/50 font-bold '>Easy Returns</h2>
                    <h4 className='text-white/48 text-sm'>30-day policy</h4>
                </div>
            </div>
            <div className='mt-2 flex gap-3 w-full'>
              {
                id==1?"": <button onClick={()=>navigate(`/home/shop/${id-1}`)} className={`font-semibold ${id==products.length?"w-full":"w-[50%]"} flex gap-2 bg-[#262626]  py-3 items-center justify-center text-white rounded-2xl cursor-pointer`}><ChevronLeft size={15}/> Previous</button>
              }
              {
                id==products.length?"": <button onClick={()=>navigate(`/home/shop/${Number(id)+1}`)} className={`font-semibold ${id==1?"w-full":"w-[50%]"} flex gap-2 bg-[#C8F400]  py-3 items-center justify-center text-black rounded-2xl cursor-pointer`}>Next <ChevronRight size={15}/></button>
              }
            </div>
        </div>
      </div>
      <h1 className='mt-20 text-2xl font-semibold'>Related Products</h1>
      <div className='flex flex-wrap gap-3'>
          {
            relatedProducts.map((elem)=>{
                return <ProductCard elem={elem}/>
            })
          }
      </div>
    </div>
  )
}

export default ProductDetail
