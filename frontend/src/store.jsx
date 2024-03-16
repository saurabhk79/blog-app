import { configureStore } from "@reduxjs/toolkit";
import basicReducer from "./services/slice";

const store = configureStore({
    reducer:{
        basicReducer
    },
})

export default store;