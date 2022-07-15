import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchExample = createAsyncThunk(
  "example/fetchExample",
  async ({ message }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/api/example`, {
        message,
      });
      return res.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }

      console.log(error.response.data);

      return rejectWithValue(error.response.data.message);
    }
  }
);
