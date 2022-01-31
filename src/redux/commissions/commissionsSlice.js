import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCommissionsAsync = createAsyncThunk(
    "commissions/getCommissionsAsync",
    async () => {
      const res = await axios("http://localhost:8080/api/commissions/getAll");
      return res.data.data;
    }
  );
  
  export const commissionsSlice = createSlice({
    name: "commissions",
    initialState: {
      commissions: [],
      isLoadingCommission: false,
      errorCommission: false,
      },
    reducers: {
    },
    extraReducers: {
      [getCommissionsAsync.pending]: (state, action) => {
        state.isLoadingCommission = true;
      },
      [getCommissionsAsync.fulfilled]: (state, action) => {
        state.commissions = action.payload;
        state.isLoadingCommission = false;
      },
      [getCommissionsAsync.rejected]: (state, action) => {
        state.isLoadingCommission = false;
        state.console.errorCommission = action.error.message;
      },
    },
  });
  
  export default commissionsSlice.reducer;