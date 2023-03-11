import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 1) {
        state.count -= 1;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
