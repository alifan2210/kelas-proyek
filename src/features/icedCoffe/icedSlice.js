import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getIced = createAsyncThunk("list-coffe/iced", async () => {
  const response = await axios.get("https://api.sampleapis.com/coffee/iced");
  return response.data;
});

export const icedSlice = createSlice({
  name: "iced",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getIced.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getIced.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      });
  },
});

export default icedSlice.reducer;
