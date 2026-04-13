import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import { ShoppingCart, Zap } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { removeloggedUser } from '../../auth/state/LoggedUserSlice';
import { toast } from 'react-toastify';
import { openCart } from '../state/CartSlice';

const Navbar = () => {
  let {loggedUser}=useSelector((state)=>state.loggedUser)
  let dispatch=useDispatch()
  let navigate=useNavigate()
  let {isOpen}=useSelector((state)=>state.cartItems)
  let {cartItems}=useSelector((state)=>state.cartItems)
  let count=0
  cartItems.map((e)=>{
      count+=e.quantity
  })
  return (
    <div  className={`w-full  ${isOpen?"pointer-events-none":""} flex justify-between items-center mb-15 py-5 px-40`}>
      <div className='flex gap-2'>
        <div className='bg-[#C8F400] p-2  flex items-center rounded-xl cursor-pointer'>
                <Zap fill='black' size={16} color='black'/>
              </div>
       <div className='text-xl font-bold'>Sky<span className='text-[#b6d82f] text-xl font-bold'>Mart</span></div>
      </div>
       <div className='flex gap-4 '>
          <NavLink  to='/home' end className={({isActive})=>{
              return isActive?"text-[#b6d82f] cursor-pointer font-bold":" text-[#707070] cursor-pointer font-bold"
          }}>Home</NavLink>
           <NavLink to='/home/shop' className={({isActive})=>{
              return isActive?"text-[#b6d82f] cursor-pointer font-bold":" text-[#707070] cursor-pointer font-bold"
          }}>Shop</NavLink>
           <NavLink to='/home/about' className={({isActive})=>{
              return isActive?"text-[#b6d82f] cursor-pointer font-bold":" text-[#707070] cursor-pointer font-bold"
          }}>About</NavLink>
       </div>
       <div className='flex items-center gap-3'>
        <div className='bg-[#191919] rounded-xl p-2 flex items-center gap-1'>
            <div className='bg-[#C8F400] px-2.5 py-1.5 w-fit flex items-center rounded-xl cursor-pointer'>
                <h1 className='text-black text-xs font-bold'>{loggedUser?.name.slice(0,1)}</h1>
              </div>
            <h1 className='text-white/70 font-semibold text-sm cursor-pointer'>{loggedUser?.name}</h1>
        </div>
        <div onClick={()=>{
          dispatch(openCart())
        }} className='relative bg-[#191919] rounded-xl border border-[#262626] p-2 cursor-pointer'>
          {
            cartItems.length!=0?<div className='absolute top-[-9px] right-[-9px] rounded-full py-0.5 px-2 flex items-center justify-center font-semibold text-sm cursor-pointer bg-[#C8F400] text-black'>{count}</div>:""
          }
          <ShoppingCart size={20}/>
          </div>
      <div onClick={()=>{
        dispatch(removeloggedUser())
        toast.success("User logged out...See you soon👋")
        navigate('/')
      }} className='bg-[#191919] rounded-xl border hover:bg-[#4d1c1c] hover:border hover:border-[#b13232] cursor-pointer border-[#262626] p-2'><LogOut size={20}/></div>
       </div>
    </div>
  )
}

export default Navbar
