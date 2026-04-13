import {configureStore} from '@reduxjs/toolkit'
import ProductReducer from '../features/home/state/ProductSlice'
import RegisterReducer from '../features/auth/state/RegisterSlice'
import LoggedReducer from '../features/auth/state/LoggedUserSlice'
import CartReducer from '../features/home/state/CartSlice'

export let store=configureStore({
    reducer:{
      products:ProductReducer,
      allRegistered:RegisterReducer,
      loggedUser:LoggedReducer,
      cartItems:CartReducer
    }
})
