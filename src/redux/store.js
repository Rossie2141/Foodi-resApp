import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice"
import cartReducer from "./slices/cartSlice"

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    cart: cartReducer,
  },
});
