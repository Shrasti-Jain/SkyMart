import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router'
import Login from '../features/auth/screens/Login'
import Register from '../features/auth/screens/Register'

import MainScreen from '../features/home/screens/MainScreen'
import HomeScreen from '../features/home/screens/HomeScreen'
import Shop from '../features/home/screens/Shop'
import About from '../features/home/screens/About'
import AuthProvider from '../features/auth/screens/AuthProvider'
import HomeProvider from '../features/auth/screens/HomeProvider'
import ProductDetail from '../features/home/screens/ProductDetail'



const AppRoutes = () => {
    let router=createBrowserRouter([
        {
            path:'/',
            element:<AuthProvider/>,
            children:[
                {
            index:true,
            element:<Login/>
        },
        {
            path:'register',
            element:<Register/>
        },
            ]
        },
        {
            path:"/home",
            element:<HomeProvider/>,
            children:[
                {
            element:<MainScreen/>,
            children:[
                {
                    index:true,
                    element:<HomeScreen/>
                },
                {
                    path:'shop',
                    element:<Shop/>,
                    children:[
                       {
                    path:':id',
                    element:<ProductDetail/>
                     }
                    ]
                },
                {
                    path:'about',
                    element:<About/>
                }
            ]
        }
            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes
