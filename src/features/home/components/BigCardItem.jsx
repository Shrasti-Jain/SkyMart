import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'

const BigCardItem = ({e}) => {
  let navigate=useNavigate()
  
  return (
    <div onClick={()=>navigate(`/home/shop/${e.id}`)} className='border flex justify-between items-center cursor-pointer border-[#707070] hover:border-[#C8F400] rounded-3xl p-5'>
                   <div className='flex items-center gap-4'>
                     <img className='w-10 bg-gray-200 object-cover' src={e.thumbnail} alt={e.title} />
                    <h5 className='font-bold  text-[#C8F400]'>${e.price}</h5>
                   </div>
                   <div className='group bg-[#f3feb4] cursor-pointer hover:bg-[#C8F400] hover:text-black  p-2 flex items-center justify-center rounded '>
                       <ShoppingBag className='text-[#C8F400] group-hover:text-black'  size={15}/>
                   </div>
               </div>
  )
}

export default BigCardItem
