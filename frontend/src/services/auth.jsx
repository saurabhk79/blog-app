/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../config";
import axios from "axios";

const initialState = {
  userId: "",
  token: "",
  isLogged: false,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "users/register",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(config.API_BASE_URL + "/auth/register", {
        ...userData,
      });

      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        "Failed to Register! Please check credentials!"
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/login",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(config.API_BASE_URL + "/auth/login", {...userData});
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        "Failed to Login! Please check credentials!"
      );
    }
  }
);

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.error = null;
      state.isLogged = false;
      state.loading = false;
      state.userId = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userId = action.payload.userId;
        state.token = action.payload.token;
        state.error = "nullweb";
        state.isLogged = true;
        state.loading = false;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLogged = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = "An error occured!";
        state.isLogged = false;
      });
  },
});

export const {logout} = auth.actions;
export default auth.reducer;
