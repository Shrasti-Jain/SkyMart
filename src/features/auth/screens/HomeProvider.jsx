import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const HomeProvider = () => {
   let {loggedUser}=useSelector((state)=>state.loggedUser)  
   if(!loggedUser){
    return <Navigate to='/'/>
   }
  return <Outlet/>
}

export default HomeProvider
