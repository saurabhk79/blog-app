/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {config} from "../config";

const initialState = {
    userId : '',
    isLogged : false,
    loading: false,
    error:null
}

export const registerUser = createAsyncThunk(
    "users/register",
    async (userData, thunkAPI) => {
        try {
            const res = await fetch(config.API_BASE_URL + "auth/register", {userData});
            const data = res.json();

            return data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue("Failed to Register! Please check credentials!")
        }
    }
)

export const loginUser = createAsyncThunk(
    "users/login",
    async (userData, thunkAPI) => {
        try {
            const res = await fetch(config.API_BASE_URL + "auth/login", {userData});
            const data = res.json();

            return data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue("Failed to Login! Please check credentials!")
        }
    }
)

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state)=> {
            state.error = null;
            state.isLogged = false;
            state.loading = false;
            state.userId = "";            
        }
    },
    extraReducers : (builder)=> {
        builder
        .addCase(loginUser.fulfilled, (state, action)=> {
            state.userId = action.payload.userId;
            state.error = null;
            state.isLogged = true;
            state.loading = false;
        })
        .addCase(loginUser.pending, (state, action)=> {
            state.loading = true;
        })
        .addCase(loginUser.rejected, (state, action)=> {
            state.loading = false;
            state.error = action.payload;
            state.isLogged = false;
        })
        .addCase(registerUser.fulfilled, (state, action)=> {
            state.error = null;
            state.loading = false;
        })
        .addCase(registerUser.pending, (state, action)=> {
            state.loading = true;
        })
        .addCase(registerUser.rejected, (state, action)=> {
            state.loading = false;
            state.error = action.payload;
            state.isLogged = false;
        })
    }
});

export default auth.reducer;