import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

let CartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItems: JSON.parse(localStorage.getItem("cartItems"))|| [],
        isOpen:false,
        price:parseInt(localStorage.getItem("price"))||0
    },
    reducers:{
        addCart:(state,action)=>{
           state.cartItems.push(action.payload)
           state.price+=action.payload.price
           localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
           localStorage.setItem("price",state.price)
        },
        openCart:(state)=>{
            state.isOpen=true
        },
        closeCart:(state)=>{
            state.isOpen=false
        },
        clearCart:(state)=>{
            state.cartItems=[]
            state.price=0
            localStorage.setItem("price",state.price)
             localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        increaseQuantity:(state,action)=>{
             state.cartItems=state.cartItems.map((e)=>{
                if(e.id!=action.payload.id) return e;
                else return {...e,quantity:e.quantity+1}
            })
            state.price+=action.payload.price
            localStorage.setItem("price",state.price)
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        decreasequantity:(state,action)=>{
              state.cartItems=state.cartItems.map((e)=>{
                if(e.id!=action.payload.id) return e;
                else return {...e,quantity:e.quantity-1}
            })
            state.price-=action.payload.price
            localStorage.setItem("price",state.price)
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        removeItem:(state,action)=>{
            state.cartItems=state.cartItems.filter((e)=>e.id!=action.payload.id)
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
            state.price-=action.payload.price
            localStorage.setItem("price",state.price)
        }
    }
})

export const {addCart,openCart,closeCart,clearCart,increaseQuantity,decreasequantity,removeItem}=CartSlice.actions
export default CartSlice.reducer