import { configureStore } from "@reduxjs/toolkit";
import { Animereducer } from "./Animeslice";


const store=configureStore({
    reducer:{
        anime:Animereducer
    }
})

export default store;
