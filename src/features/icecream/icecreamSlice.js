import { ordered as cakeOrdered } from "../cake/cakeSlice";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   numberOfIcecreams: 400,
};

const icecreamSlice = createSlice({
   name: "icecream",
   initialState: initialState,
   reducers: {
      ordered: (state, action) => {
         state.numberOfIcecreams--;
      },
      restocked: (state, action) => {
         state.numberOfIcecreams = state.numberOfIcecreams + action.payload;
      },
   },
   //  extraReducers: {
   //     ["cake/ordered"]: (state, action) => {
   //        state.numberOfIcecreams--;
   //     },
   //  },... abettter way to write this and also the recomemded way is to use a builder function

   extraReducers: (builder) =>
      builder.addCase(cakeOrdered, (state, action) => {
         state.numberOfIcecreams--;
      }),
   // this is the recommended way of writing an extrareducer
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;

// ['cake/ordered'] is the action creator called undrer the hood when we order a cake and when we restock it calls 'cake/restocked' same goes with icecream
