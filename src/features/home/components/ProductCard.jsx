import { Check, ShoppingCart, Star, TableRowsSplit } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import { addCart, increaseQuantity, openCart } from '../state/CartSlice'
import {toast} from 'react-toastify'

const ProductCard = ({elem}) => {
    let rating=Math.floor(elem.rating)
    let navigate=useNavigate()
    let dispatch=useDispatch()
    let {cartItems,isOpen}=useSelector((state)=>state.cartItems)
    let find=cartItems.find((e)=>e.id==elem.id)
   
  return (
    <div onClick={()=>navigate(`/home/shop/${elem.id}`)} className={`w-58 h-110 flex flex-col rounded-t-2xl overflow-hidden cursor-pointer`}>
      <div className='relative bg-white h-[55%] p-10 flex items-center justify-center'>
         <img className='w-50 object-cover hover:scale-120 transform transition-all duration-250' src={elem.thumbnail} alt={elem.title} />
          <h1 className='absolute top-3 left-3 bg-[#666666] text-white/60 rounded-xl py-1 px-2 font-semibold text-xs capitalize'>{elem.category}</h1>
      </div>
      <div className='flex gap-1 h-[45%] flex-col bg-[#111111] p-5 rounded-b-2xl  border border-[#707070] hover:border hover:border-[#C8F400]'>
            <h3 className='capitalize text-white/50'>{elem.category}</h3>
            <h5 className='text-sm h-20 font-semibold'>{elem.title}</h5>
          <div className='flex items-center'>
            {
               Array.from({length:5}).map((e,i)=>{
                return <Star size={14} key={i} color={i<rating?"#FBBF24":"#343434"} fill={i<rating?"#FBBF24":"#343434"}/>
               })
            }
            <h3 className='text-sm text-white/50'>({elem.reviews.length} reviews) </h3>
          </div>
           <hr className='white'/>
          <div className='mt-4  flex justify-between items-center'>
            <h4 className='text-[#C8F400] font-bold text-xl'>${elem.price}</h4>
            {
              find?<button onClick={(e)=>{
                e.stopPropagation()
                toast.success("Quantity updated...")
                dispatch(openCart())
                dispatch(increaseQuantity(find))
              }} className=' flex rounded-xl items-center justify-center py-2 px-3 bg-[#132B1C] border border-[#224931] text-[#4ADE80] cursor-pointer  gap-2'><Check size={15}/> Added</button>
              :<button onClick={(e)=>{
               e.stopPropagation()
                dispatch(addCart({...elem,quantity:1}))
                dispatch(openCart())
               toast.success("Added to Cart")
              }} className='flex rounded-xl items-center justify-center py-2 px-3 bg-[#C8F400] cursor-pointer text-black gap-2'><ShoppingCart size={15}/> Add</button>
            }
          </div>
      </div>
    </div>
  )
}

export default ProductCard
