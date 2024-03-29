import { configureStore } from "@reduxjs/toolkit";
import auth from "./services/auth";

const store = configureStore({
    reducer:{
        auth
    },
})

export default store;