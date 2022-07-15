import { createSlice } from "@reduxjs/toolkit";
import { fetchExample } from "../actions/exampleAction";

const initialState = {
  example: null,
  loading: "idle",
  error: null,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchExample.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(fetchExample.fulfilled, (state, action) => {
        state.loading = "success";
        state.example = action.payload;
      })
      .addCase(fetchExample.rejected, (state, action) => {
        state.loading = "error";
        if (action.payload) {
          state.error = { message: action.payload };
        } else {
          state.error = { message: action.error };
        }
      });
  },
});
