import React, { useRef } from 'react'
import { ArrowRight, Lock, Mail, User } from 'lucide-react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setnewUser } from '../state/RegisterSlice';
const Register = () => {

  let navigate=useNavigate()
  let inputRef=useRef({})
  let {allRegistered}=useSelector((state)=>state.allRegistered)
  let dispatch=useDispatch()

  let handleSubmit=(e)=>{
        e.preventDefault()

        let name=inputRef.current.name.value
        let email=inputRef.current.email.value
        let password=inputRef.current.password.value
        let confirmPassword=inputRef.current.confirmPassword.value
    
        if(!name || !email || !password || !confirmPassword){
          return toast.error("Fill all fields")
        }

        let find=allRegistered.find((elem)=>elem.email==email)

        if(find){
           return toast.error("Email already registered...")
        }
        if(password!=confirmPassword){
          return toast.error("Passwords do not match")
        }
        dispatch(setnewUser({name,email,password}))
        toast.success("User registered Successfully🎉")
        navigate('/')
        e.target.reset()
  }

  return (
    <div className='h-screen w-full bg-black text-white flex items-center justify-center'>
      <div className='flex w-[25%] flex-col gap-8 items-center justify-center'>
        <h1 className='text-2xl font-bold'>Sky<span className='text-[#C8F400] font-bold text-2xl'>Mart</span></h1>
        <form onSubmit={handleSubmit} className='border w-full border-[#707070] rounded-2xl p-6 flex flex-col'>
          <h1 className='text-xl font-bold'>Create account</h1>
          <h5 className='text-[#707070] text-sm '>Join SkyMart and start shopping</h5>
        <div className='mt-8 flex flex-col gap-4'>
            <div className=' bg-[#1D1D1D] flex gap-3 items-center rounded-2xl p-3 border border-[#707070]  focus-within:border-[#D8F462] '>
             <User size={16} color='#707070'/>
             <input ref={(e)=>inputRef.current.name=e} className='outline-0 text-sm placeholder:text-[#707070]' type="text" placeholder='Full name'/>
          </div>
          <div className=' bg-[#1D1D1D] flex gap-3 items-center rounded-2xl p-3 border border-[#707070]  focus-within:border-[#D8F462] '>
             <Mail size={16} color='#707070'/>
             <input ref={(e)=>inputRef.current.email=e} className='outline-0 text-sm placeholder:text-[#707070]' type="email" placeholder='Email address'/>
          </div>
          <div className=' bg-[#1D1D1D] flex gap-3 items-center rounded-2xl p-3 border border-[#707070]  focus-within:border-[#D8F462] '>
             <Lock size={16} color='#707070'/>
             <input minLength={6} ref={(e)=>inputRef.current.password=e} className='outline-0 text-sm placeholder:text-[#707070]' type="password" placeholder='Password (min 6 chars)'/>
          </div>
          <div className=' bg-[#1D1D1D] flex gap-3 items-center rounded-2xl p-3 border border-[#707070]  focus-within:border-[#D8F462] '>
             <Lock size={16} color='#707070'/>
             <input ref={(e)=>inputRef.current.confirmPassword=e} className='outline-0 text-sm placeholder:text-[#707070]' type="password" placeholder='Confirm password'/>
          </div>
           <button type="submit" className='bg-[#b6d82f] rounded-2xl px-5 py-3 font-semibold flex gap-2 items-center justify-center text-black cursor-pointer'>Create Account <span><ArrowRight size={20}/></span></button>
          <h6 className='mt-3 text-center text-[#707070] text-sm font-bold'>Already have an account? <span onClick={()=>navigate('/')} className='text-sm font-bold cursor-pointer text-[#b6d82f]'>Sign in</span></h6>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Register
