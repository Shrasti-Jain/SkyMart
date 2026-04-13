import React, { useRef } from 'react'
import { Mail } from 'lucide-react';
import { Lock } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { setloggedUser } from '../state/LoggedUserSlice';

const SignIn = () => {
  let inputRef=useRef({})
  let navigate=useNavigate()
  let {allRegistered}=useSelector((state)=>state.allRegistered)
  let dispatch=useDispatch()

  let handleSubmit=(e)=>{
        e.preventDefault()
        let email=inputRef.current.email.value;
        let password=inputRef.current.password.value;
        if(!email || !password){
          return toast.error("Fill all fields...")
        }
        let findUser=allRegistered.find((elem)=>elem.email==email && elem.password==password)
        if(!findUser){
          toast.error("User not registered...")
          navigate('/register')
          return
        }
        toast.success("User logged in suceessfully🎉")
        navigate('/home')
        dispatch(setloggedUser(findUser))
        e.target.reset()
  }

  return (
    <div className='h-full w-[50%] flex items-center justify-center text-white'>
          <form className='bg-[#111111] flex flex-col gap-8 border border-[#707070]  p-6 rounded-2xl w-[50%]' onSubmit={handleSubmit}>
             <div >
                  <h3 className='font-bold text-2xl'>Sign in</h3>
               <h5 className='text-[#707070]'>Enter your credentials to continue</h5>
             </div>
             <div className='flex flex-col gap-3'>
                 <div className='border border-[#707070] focus-within:border-[#D8F462] flex gap-3 items-center rounded-2xl p-3'>
                <Mail color='#707070' size={20}/>
                <input ref={(e)=>inputRef.current.email=e}  className='outline-0 text-sm ' type="email" placeholder='Email address' />
              </div>
              <div className='border border-[#707070] flex gap-3 focus-within:border-[#D8F462] items-center rounded-2xl p-3'>
                <Lock color='#707070' size={20}/>
                <input ref={(e)=>inputRef.current.password=e} className='outline-0 text-sm' type="password" placeholder='Password' />
              </div>
              <button type="submit" className='bg-[#b6d82f] rounded-2xl px-5 py-3 font-semibold flex gap-2 items-center justify-center text-black cursor-pointer'>Sign in <span><ArrowRight size={20}/></span></button>
              <h6 className='mt-3 text-center text-[#707070] text-sm font-bold'>Don't have an account? <span onClick={()=>navigate('/register')} className='text-sm font-bold cursor-pointer text-[#b6d82f]'>Create One</span></h6>
             </div>
          </form>
    </div>
  )
}

export default SignIn
