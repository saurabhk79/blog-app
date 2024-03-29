import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import blogApi from "./services/blog";
import blogSlice from "./services/blogSlice";
import auth from "./services/auth";

const store = configureStore({
  reducer: {
    auth,
    blog: blogSlice,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
});

setupListeners(store.dispatch)

export default store;
