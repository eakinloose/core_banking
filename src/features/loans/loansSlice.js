import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   loading: false,
   loans: [],
   error: "",
};

export const fetchLoans = createAsyncThunk("loan/fetchLoans", () => {
   return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data);
});

const loanSlice = createSlice({
   name: "loan",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchLoans.pending, (state, action) => {
         state.loading = true;
      });
      builder.addCase(fetchLoans.fulfilled, (state, action) => {
         state.loading = false;
         state.loans = action.payload;
         state.error = "";
      });
      builder.addCase(fetchLoans.rejected, (state, action) => {
         state.loading = false;
         state.loans = [];
         state.error = action.payload;
      });
   },
});

export default loanSlice.reducer;
