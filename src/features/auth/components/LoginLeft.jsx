import React from 'react'

const LoginLeft = () => {
  return (
    <div className='h-full w-[50%] border-r border-white flex flex-col gap-25 text-white p-15'>
       <div>
        <h1 className='text-4xl font-bold'>Sky<span className='text-[#C8F400] text-4xl font-bold'>Mart</span></h1>
       </div>
       <div className='flex flex-col gap-10'>
           <h1 className='uppercase text-[#C8F400]'>Welcome Back</h1>
          <div className='flex flex-col gap-2'>
             <h1 className='font-bold text-5xl'>Shop the future.</h1>
           <h1 className='text-[#C8F400] text-5xl font-bold'>Today.</h1>
          </div>
          <p className='text-[#707070]'>Thousands of products, lightning-fast delivery, and <br /> prices that make your wallet happy.</p>
          <div className='flex gap-3'>
            <div className='border border-white rounded-2xl px-20 py-3'>
                <h3 className='text-[#C8F400] font-semibold text-xl'>20k+</h3>
                <h5 className='text-[#707070]'>Products</h5>
            </div>
             <div className='border border-white rounded-2xl px-20 py-3'>
                <h3 className='text-[#C8F400] font-semibold text-xl'>50k+</h3>
                <h5 className='text-[#707070]'>Users</h5>
            </div>
             <div className='border border-white rounded-2xl px-20 py-3'>
                <h3 className='text-[#C8F400] font-semibold text-xl'>4.9*</h3>
                <h5 className='text-[#707070]'>Rating</h5>
            </div>
          </div>
       </div>
    </div>
  )
}

export default LoginLeft
