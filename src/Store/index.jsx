import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import editCartSlice from "./editCartSlice";
import rezervationCartSlice from "./rezervationCartSlice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer,editcart:editCartSlice.reducer , rezervation: rezervationCartSlice.reducer }
});

export default store;
