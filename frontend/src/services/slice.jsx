import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isWorking : true,
}

const basicReducer = createSlice({
    name: "reducers",
    initialState,
    reducers: {}
});

export default basicReducer.reducer;