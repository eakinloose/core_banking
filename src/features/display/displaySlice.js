import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentDisplay: "maindashboard"
}

const displaySlice = createSlice({
  name: "display",
  initialState: initialState,
  reducers:{
    loandashboard:(state, action) => {
      state.currentDisplay = "loandashboard"
    },
    maindashboard:(state, action) => {
      state.currentDisplay= "maindashboard"
    },
    loans:(state, action) => {
      state.currentDisplay= "loans"
    }
  }
});

export default displaySlice.reducer;
export const {loandashboard, loans, maindashboard } = displaySlice.actions;