import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./reducer/userReducer.ts";

const store = configureStore({
    reducer: {
        userReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
})
export  default  store;
