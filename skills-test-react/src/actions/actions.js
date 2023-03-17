import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    submitValues: (state, action) => {
      console.log(state.values)
      state.values = [...state.values, action.payload];
    },
    deleteValue: (state, action) => {
      const indexToDelete = action.payload;
      state.values.splice(indexToDelete, 1);
    },
  },
});

export const { submitValues, deleteValue } = formSlice.actions;

export default formSlice.reducer;
