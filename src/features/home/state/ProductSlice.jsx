import {createSlice} from '@reduxjs/toolkit'

let ProductSlice=createSlice({
    name:"product",
    initialState:{
        products:JSON.parse(localStorage.getItem("products"))||[]
    },
    reducers:{
        setProduct:(state,action)=>{
            state.products=action.payload
            localStorage.setItem("products",JSON.stringify(state.products))
        }
    }
})

export const {setProduct} =ProductSlice.actions
export default ProductSlice.reducer