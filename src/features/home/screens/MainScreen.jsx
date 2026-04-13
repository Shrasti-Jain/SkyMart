import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useNavigate } from 'react-router'
import {  ArrowRight, ShoppingBag, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, closeCart } from '../state/CartSlice'
import CartProduct from '../components/CartProduct'
import { toast } from 'react-toastify'


const MainScreen = () => {
  let  navigate=useNavigate()
  let {isOpen}=useSelector((state)=>state.cartItems)
  let dispatch=useDispatch()
  let {cartItems,price}=useSelector((state)=>state.cartItems)

  return (
    <div  className='flex flex-col relative h-screen w-full text-white bg-black '>
    <div onClick={()=>{
      isOpen && dispatch(closeCart())
    }} className={`flex flex-col overflow-hidden ${isOpen?"blur-sm":""}`}>
        <Navbar/>

      <div className={`flex-1   flex flex-col  overflow-auto`}>
        <Outlet/>

        <div  className='mt-25 mb-10 '>
        <hr className='border-white'/>

        <div className='mt-10 flex flex-col gap-2 items-center justify-center'>
          <h3 className='text-xl font-semibold text-[#C2F400]'>SkyMart</h3>

        <h5 className='text-xs text-[#707070]'>© 2025 SkyMart • Built with React + Redux + TanStack Query</h5>
        </div>
        </div>
      </div>
    </div>

      {
        isOpen?<div className='absolute  right-0 top-0 h-full w-110 border border-[#292929] bg-[#111111] '>
        <div className='flex justify-between items-center p-5'>
          <h1 className='flex gap-3 items-center text-xl font-semibold'><ShoppingBag color='#C2F400' size={18}/> Cart</h1>

          <div onClick={()=>dispatch(closeCart())} className='group cursor-pointer'>
            <X size={18} className='text-[#707070] group-hover:text-white'/>
          </div>
        </div>

        <hr />

        {
          cartItems.length==0?<div className=' w-full h-full flex flex-col items-center justify-center'>
          <h1 className='text-xl text-[#B8AE8D] font-semibold'>Cart is empty</h1>

          <h3 className='mt-1 text-[#707070] text-sm'>Go shop something cool!</h3>

          <button onClick={()=>{
                dispatch(closeCart())
            }} className='mt-4 bg-[#C2F400] font-semibold text-sm text-black cursor-pointer rounded-2xl py-3 px-5'>Browse Products</button>
        </div>:<div className='w-full flex flex-col gap-3 h-[70%] p-5 overflow-auto'>
            {
              cartItems.map((elem)=>{
                return <CartProduct key={elem.id} elem={elem}/>
              })
            }
        </div>
        }

        <hr />

        <div className='w-full p-5 flex flex-col gap-3 text-center'>
           <div className='flex items-center justify-between'>
            <h2 className='text-white/40 font-semibold'>Total</h2>

             <h4 className='text-2xl font-bold text-[#C2F400]'>${price}</h4>
           </div>

           <button onClick={()=>{
            dispatch(clearCart())
            toast.success("Order Placed 🎉")
           }}
            className=' flex items-center justify-center gap-2 text-black rounded-2xl py-3 cursor-pointer font-semibold  bg-[#C8F400]'> Checkout <ArrowRight size={16}/></button>

           <h5 onClick={()=>dispatch(clearCart())} className='text-white/40 text-sm hover:text-[#BC2111] transition-all duration-250 cursor-pointer'>Clear cart</h5>
        </div>
      </div>:null
      }
    </div>
  )
}

export default MainScreen
