import { createSlice } from "@reduxjs/toolkit";

let LoggedUserSlice=createSlice({
    name:"loggedUser",
    initialState:{
        loggedUser:JSON.parse(localStorage.getItem("loggedUser"))|| null
    },
    reducers:{
        setloggedUser:(state,action)=>{
            state.loggedUser=action.payload
            localStorage.setItem("loggedUser",JSON.stringify(state.loggedUser))
        },
        removeloggedUser:(state)=>{
            state.loggedUser=null
             localStorage.setItem("loggedUser",JSON.stringify(state.loggedUser))
        }
    }
})

export const {setloggedUser,removeloggedUser} =LoggedUserSlice.actions
export default LoggedUserSlice.reducer