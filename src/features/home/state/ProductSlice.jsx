import {createSlice} from '@reduxjs/toolkit'

let ProductSlice=createSlice({
    name:"product",
    initialState:{
        products:[]
    },
    reducers:{
        setProduct:(state,action)=>{
            state.products=action.payload
        }
    }
})

export const {setProduct} =ProductSlice.actions
export default ProductSlice.reducer