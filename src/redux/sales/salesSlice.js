import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getSalesAsync = createAsyncThunk(
    "sales/getSalesAsync",
    async () => {
      const res = await axios("http://localhost:8080/api/sales/getAll");
      return res.data.data;
    }
  );

  export const salesSlice = createSlice({
    name: "sales",
    initialState: {
      sales: [],
      isLoadingSale: false,
      errorSale: false,
      },
    reducers: {
    },
    extraReducers: {
      [getSalesAsync.pending]: (state, action) => {
        state.isLoadingSale = true;
      },
      [getSalesAsync.fulfilled]: (state, action) => {
        state.sales = action.payload;
        state.isLoadingSale = false;
      },
      [getSalesAsync.rejected]: (state, action) => {
        state.isLoadingSale = false;
        state.console.errorSale = action.error.message;
      },
    },
  });
  
  export default salesSlice.reducer;