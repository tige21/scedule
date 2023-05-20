import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICount {
  count: number;
}

const initialState: ICount = {
  count: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

export const { actions, reducer } = countSlice;
