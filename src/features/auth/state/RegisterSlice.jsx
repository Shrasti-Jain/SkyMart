import { createSlice } from "@reduxjs/toolkit";

let RegisterSlice=createSlice({
    name:"RegisteredUsers",
    initialState:{
        allRegistered:JSON.parse(localStorage.getItem("allUsers")) || []
    },
    reducers:{
        setnewUser:(state,action)=>{
            state.allRegistered.push(action.payload)
            localStorage.setItem("allUsers",JSON.stringify(state.allRegistered))
        }
    }
})

export const {setnewUser} =RegisterSlice.actions
export default RegisterSlice.reducer