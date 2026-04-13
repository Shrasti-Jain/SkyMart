import React from 'react'
import { useSelector } from 'react-redux'
import {  Navigate, Outlet } from 'react-router'

const AuthProvider = () => {
  let {loggedUser}=useSelector((state)=>state.loggedUser)

  if(loggedUser){
    return <Navigate to='/home'/>
  }
  return <Outlet/>
}
 export default AuthProvider