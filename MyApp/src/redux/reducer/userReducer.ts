import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "addUser",
    initialState: {
        userData: {
            uuid: "",
            fcmToken: ""
        }
    },
    reducers: {
        addUser: (state, action) => {
            state.userData = action.payload
        }
    }
})

export const userReducer= userSlice.reducer;
export const  {addUser}= userSlice.actions;
export const userSelector= (state:any)=>state.userData;
