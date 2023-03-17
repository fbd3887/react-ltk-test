import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../actions/actions";

const store = configureStore({
  reducer: {
    form: formSlice,
  },
});

export default store;
