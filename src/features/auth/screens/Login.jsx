import React from 'react'
import LoginLeft from '../components/LoginLeft'
import SignIn from '../components/SignIn'

const Login = () => {
  return (
    <div className='h-screen w-full bg-black flex '>
      <LoginLeft/>
      <SignIn/>
    </div>
  )
}

export default Login
