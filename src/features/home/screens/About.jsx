import { ArrowRight, Box, BoxIcon, HeartHandshake, ShieldCheck, Star, Users, Van, Zap } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {
  let navigate=useNavigate()

  return (
    <div className='w-full flex flex-col items-center gap-8 px-80 text-center'>
       <div className='flex flex-col items-center text-center gap-8'>
              <div className='bg-[#C8F400] p-4 flex items-center rounded-2xl cursor-pointer'>
                <Zap fill='black' color='black'/>
              </div>
             <h1 className='text-5xl font-semibold'>About <span className='text-[#C8F400] text-5xl'>SkyMart</span></h1>
             <p className='text-[#6E6E6E] font-semibold '>SkyMart is a next-generation e-commerce platform built to make online <br /> shopping fast, fair, and enjoyable — for everyone.</p>
       </div>
       <div className='mt-10 w-full grid grid-cols-4 gap-5'>
          <div className='border  flex flex-col items-center gap-1 border-white rounded-2xl  py-3 '>
              <BoxIcon color='#C8F400'/>
              <h3 className='text-2xl font-semibold'>20k+</h3>
              <h5 className='text-sm text-[#4A4A4A] font-bold'>Products</h5>
          </div>
            <div className='border items-center flex flex-col gap-1 border-white rounded-2xl py-3 '>
              <Users color='#C8F400'/>
              <h3 className='text-2xl font-semibold'>50k+</h3>
              <h5 className='text-sm text-[#4A4A4A] font-bold'>Happy Customers</h5>
          </div>
            <div className='border items-center flex flex-col gap-1 border-white rounded-2xl py-3 '>
              <Star color='#C8F400'/>
              <h3 className='text-2xl font-semibold'>4.9</h3>
              <h5 className='text-sm text-[#4A4A4A] font-bold'>Avg.Rating</h5>
          </div>
            <div className='border items-center flex flex-col gap-1 border-white rounded-2xl py-3 '>
              <Van color='#C8F400'/>
              <h3 className='text-2xl font-semibold'>99%</h3>
              <h5 className='text-sm text-[#4A4A4A] font-bold'>On-time Delivery</h5>
          </div>
       </div>
       <div className='border border-white text-start flex flex-col gap-5 rounded-2xl p-8 w-full'>
             <h1 className='text-2xl font-bold'>Our Story</h1>
             <p className='text-sm text-[#6a6969] font-semibold'>SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: what if shopping online was actually enjoyable?</p>
             <p className='text-sm text-[#6a6969] font-semibold'>Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.</p>
             <p className='text-sm text-[#6a6969] font-semibold'>We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.</p>
       </div>
       <h1 className='text-2xl font-semibold'>What We Stand For</h1>
       <div className='grid grid-cols-2 grid-rows-2 gap-5  w-full'>
          <div className='border flex  gap-4 border-white rounded-2xl p-8'>
             <div className='bg-[#23280F] rounded-2xl px-3 py-2.5 h-fit flex items-center justify-center'>
              <ShieldCheck color='#C5F000'/>   
             </div>
            <div className='flex flex-col text-start gap-2'>
              <h1 className='font-bold text-xl'>Trust</h1>
              <h3 className=' text-[#6a6969] text-semibold'>Every product is verified for quality and authenticity before listing.</h3>
            </div>
          </div>
          <div className='border flex  gap-4 border-white rounded-2xl p-8'>
             <div className='bg-[#23280F] rounded-2xl px-3 py-2.5 h-fit flex items-center justify-center'>
              <Van color='#C5F000'/> </div>  
            <div className='flex flex-col text-start gap-2'>
              <h1 className='font-bold text-xl'>Speed</h1>
              <h3 className=' text-[#6a6969] text-semibold'>We obsess over delivery times so your orders arrive when promised.</h3>
            </div>
          </div>
          <div className='border flex  gap-4 border-white rounded-2xl p-8'>
            <div className='bg-[#23280F] rounded-2xl px-3 py-2.5 h-fit flex items-center justify-center'>
               <HeartHandshake color='#C5F000'/>  </div> 
            <div className='flex flex-col text-start gap-2'>
              <h1 className='font-bold text-xl'>Community</h1>
              <h3 className=' text-[#6a6969] text-semibold'>Built around real customer feedback, not just business metrics.</h3>
            </div>
          </div>
          <div className='border flex  gap-4 border-white rounded-2xl p-8'>
            <div className='bg-[#23280F] rounded-2xl px-3 py-2.5 h-fit flex items-center justify-center'>
               <Star color='#C5F000'/>   
            </div>
            <div className='flex flex-col text-start gap-2'>
              <h1 className='font-bold text-xl'>Quality</h1>
              <h3 className=' text-[#6a6969] text-semibold'>We curate the best — no filler, no junk, just great products.</h3>
            </div>
          </div>
       </div>
       <h1 className='text-2xl font-semibold'>Meet the Team</h1>
       <div className='w-full grid grid-cols-4 gap-4'>
        <div className='flex flex-col border items-center border-white rounded-2xl p-5 '>
          <div className='w-fit bg-[#C8F400] rounded-xl flex items-center justify-center py-3 px-5'>
              <h2 className='text-black font-semibold'>A</h2>
          </div>
          <h3 className='mt-2'>Aryan Shah</h3>
          <h5 className='text-sm text-[#6a6969]'>Founder & CEO</h5>
        </div>
         <div className='flex flex-col border items-center border-white rounded-2xl p-5 '>
          <div className='w-fit bg-[#3B82F6] rounded-xl flex items-center justify-center py-3 px-5'>
              <h2 className='text-black font-semibold'>P</h2>
          </div>
          <h3 className='mt-2'>Priya Mehta</h3>
          <h5 className='text-sm text-[#6a6969]'>Head of Product</h5>
        </div>
         <div className='flex flex-col border items-center border-white rounded-2xl p-5 '>
          <div className='w-fit bg-[#A855F7] rounded-xl flex items-center justify-center py-3 px-5'>
              <h2 className='text-black font-semibold'>R</h2>
          </div>
          <h3 className='mt-2'>Rohan Verma</h3>
          <h5 className='text-sm text-[#6a6969]'>Lead Engineer</h5>
        </div>
         <div className='flex flex-col border items-center border-white rounded-2xl p-5 '>
          <div className='w-fit bg-[#F43F5E] rounded-xl flex items-center justify-center py-3 px-5'>
              <h2 className='text-black font-semibold'>S</h2>
          </div>
          <h3 className='mt-2'>Sneha Kapoor</h3>
          <h5 className='text-sm text-[#6a6969]'>Design Director</h5>
        </div>
       </div>
       <div className='border border-white w-full p-10 flex flex-col items-center gap-5 rounded-2xl'>
          <h2 className='text-2xl font-bold'>Ready to shop?</h2>
          <h5 className='text-[#6a6969]'>Explore thousands of products at unbeatable prices.</h5>
          <button onClick={()=>navigate('/home/shop')} className='flex gap-3 items-center bg-[#C8F400] text-black w-fit px-8 py-3 rounded-2xl cursor-pointer font-semibold'>Browse Products <ArrowRight size={18}/></button>
       </div>
    </div>
  )
}

export default About
