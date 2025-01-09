import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./components/admin/adminSlice";



export const store = configureStore({
    reducer:{
        posts:adminReducer
    }
})