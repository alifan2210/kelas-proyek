import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHot = createAsyncThunk("list-coffe/hot", async () => {
  const response = await axios.get("https://api.sampleapis.com/coffee/hot");
  return response.data;
});

export const hotSlice = createSlice({
  name: "hot",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getHot.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getHot.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      });
  },
});

export default hotSlice.reducer;
