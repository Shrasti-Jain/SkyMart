import { ArrowRight, Shield, Zap } from 'lucide-react'
import React from 'react'
import { Box } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Star } from 'lucide-react';
import { Tag } from 'lucide-react';
import { useNavigate } from 'react-router';
import Card from '../components/Card';
import BigCard from '../components/BigCard';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  let navigate=useNavigate()
  let {products}=useSelector((state)=>state.products)
  let {cartItems,price}=useSelector((state)=>state.cartItems)
  let topProducts = [...products]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 5)
  
  let randomProducts = [...products]
  .sort(() => Math.random() - 0.5)
  .slice(0, 5)
  let count=0
  cartItems.map((e)=>{
    count+=e.quantity
  })
  return (
    <div className='flex flex-col gap-10 py-5 px-40'>
      <div className='border flex justify-between items-center border-white rounded-2xl p-10 '>
        <div className='flex flex-col gap-6 '>
        <h3 className='uppercase text-[#85B005]'>Good evening 👋</h3>
        <div className='flex flex-col'>
        <h5 className='text-5xl font-bold'>Welcome back,</h5>
        <h6 className='text-[#C8F400] text-5xl font-bold'>Shrasti!</h6></div>
        <p className='text-md text-[#707061] text-semibold'>Discover today's picks — hand-curated products across <br /> electronics, fashion, and more.</p>
        <div className='flex gap-5'>
          <button onClick={()=>navigate('/home/shop')} className='flex bg-[#C8F400] rounded-2xl cursor-pointer px-5 py-2 text-black'>Shop Now<ArrowRight/></button>
          <button onClick={()=>navigate('/home/shop')} className='border border-[#595959] rounded-2xl px-5 py-1 cursor-pointer'>View All Products</button> 
         </div> 
        </div>
        <div className='flex flex-col gap-3'>
          <div className='border border-[#889a3e] bg-[#23280F] p-4 rounded-xl flex flex-col items-center justify-center'>
            <h3 className='text-2xl text-[#C8F400] font-bold'>20+</h3>
            <h5 className='text-sm'>Products Available</h5>
          </div>
           <div className='border border-white p-4 rounded-xl flex flex-col items-center justify-center'>
            <h3 className='text-2xl font-bold'>Free</h3>
            <h5 className='text-sm'>Delivery on ₹999+</h5>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-3 w-full'>
        <div className='border flex  gap-5 p-5 rounded-2xl  '>
          <div className='bg-[#23280F] h-fit rounded-xl border border-[#262626] p-2 cursor-pointer'><Box color='#C8F400' size={20}/></div>
          <div className='flex flex-col'>
         <h3 className='text-bold text-xl'>{count}</h3>
         <h4 className='text-[#6C6C6C] text-sm'>Cart Items</h4>
         <h5 className='text-sm text-[#6C6C6C]'>In your bag</h5>
          </div>
        </div>
         <div className='border flex gap-5 p-5 rounded-2xl '>
           <div className='bg-[#151C28] h-fit rounded-xl border border-[#262626] p-2 cursor-pointer'><TrendingUp color='#60A5FA' size={20}/></div>
          <div className='flex flex-col'>
       {
          cartItems.length!=0?<h3 className='text-bold text-xl'>${price}</h3>:<h3 className='text-bold text-xl'>$0.00</h3>
       }
         <h4 className='text-[#6C6C6C] text-sm'>Cart Value</h4>
         <h5  className='text-sm text-[#6C6C6C]'>Ready to checkout</h5>
          </div>
        </div>
         <div className='border flex gap-5 p-5 rounded-2xl '>
           <div className='bg-[#281F10] h-fit rounded-xl border border-[#262626] p-2 cursor-pointer'><Star color='#FBBF24' size={20}/></div>
          <div className='flex flex-col'>
         <h3 className='text-bold text-xl'>5</h3>
         <h4 className='text-[#6C6C6C] text-sm'>Top Products</h4>
         <h5  className='text-sm text-[#6C6C6C]'>Highly rated</h5>
          </div>
        </div>
         <div className='border flex gap-5 p-5 rounded-2xl '>
            <div className='bg-[#201828] h-fit rounded-xl border border-[#262626] p-2 cursor-pointer'><Tag color='#C084FC' size={20}/></div>
          <div className='flex flex-col'>
         <h3 className='text-bold text-xl'>4</h3>
         <h4 className='text-[#6C6C6C] text-sm'>Categories</h4>
         <h5  className='text-sm text-[#6C6C6C]'>To explore</h5>
          </div>
        </div>
      </div>
      <div>
       <div className='flex justify-between'>
         <h3 className='text-xl font-bold'>Shop by Category</h3>
         <h5 onClick={()=>navigate('/home/shop')} className='flex gap-2 items-center text-sm cursor-pointer text-[#E2FF4C]'>View All <ArrowRight color='#E2FF4C' size={15}/></h5>
       </div>
        <div className='mt-8 flex flex-wrap gap-4'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className='mt-8 flex gap-8'>
          <BigCard elem={topProducts}  cate={"Top Rated"}/>
           <BigCard elem={randomProducts} cate={"New Arrivals"}/>
        </div>
        <div className='mt-8 w-full grid grid-cols-3 gap-4'>
          <div className='border border-white rounded-2xl items-center  p-4 flex gap-3'>
              <Zap  color='#B1D702'/>
              <div className='flex flex-col '>
                  <h3 className='font-bold text-sm'>Fast Delivery</h3>
                  <h5 className='text-sm text-[#707070]'>Same-day on select items</h5>
             </div>
          </div>
         <div className=' border border-white rounded-2xl items-center  p-4 flex gap-3'>
              <Shield color='#60A5FA'/>
              <div className='flex flex-col '>
                  <h3 className='font-bold text-sm'>Secure Payment</h3>
                  <h5 className='text-sm text-[#707070]'>100% encrypted checkout</h5>
             </div>
          </div>
           <div className=' border border-white rounded-2xl items-center p-4 flex gap-3'>
              <Tag color='#4ADE80'/>
              <div className='flex flex-col '>
                  <h3 className='font-bold text-sm'>Best Prices</h3>
                  <h5 className='text-sm text-[#707070]'>Price-match guarantee</h5>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
