import { Delete, Minus, Plus, Trash } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { decreasequantity, increaseQuantity, removeItem } from '../state/CartSlice'

const CartProduct = ({elem}) => {
  let dispatch=useDispatch()
  return (
    <div className='border w-full border-white p-3 rounded-2xl flex gap-3'>
        <div className='w-[30%] flex items-center justify-center'>
           <img className='w-[80%] bg-white object-cover' src={elem.thumbnail} alt={elem.title} />
        </div>
        <div className='w-[70%] flex flex-col gap-1 '>
            <h1 className='text-sm font-bold'>{elem.title}</h1>
            <h4 className='text-xl text-[#C8F400] font-bold'>${elem.price}</h4>
            <h5 className='text-white/40 text-xs'>${elem.price} each</h5>
            <div className='flex justify-between items-center'>
               <div className='flex gap-4 items-center'>
              <h4 onClick={()=>{
                toast.success("Quantity updated...")
                if(elem.quantity==1){
                  dispatch(removeItem(elem))
                  return toast.success("Item removed from cart...")
                }
                dispatch(decreasequantity(elem))
              }} className='border border-white/40 p-1.5 hover:bg-[#313131] rounded-xl cursor-pointer'><Minus size={15}/></h4>
              <h4>{elem.quantity}</h4>
              <h4 onClick={()=>{
                toast.success("Quantity updated...")
                dispatch(increaseQuantity(elem))
              }} className='border border-white/40  p-1.5 hover:bg-[#313131] rounded-xl cursor-pointer'><Plus size={15}/></h4>
               </div>
               <Trash onClick={()=>{
                dispatch(removeItem(elem))
                toast.success("Item removed from cart...")
               }} color='#ED6C6C' className='cursor-pointer' size={16}/>
            </div>
        </div>
    </div>
  )
}

export default CartProduct
