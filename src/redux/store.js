import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice"
import cartReducer from "./slices/cartSlice"
import authReducer from './slices/authSlice';
import favoritesReducer from "./slices/favoriteSlice"

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    cart: cartReducer,
    auth: authReducer,
    favorites: favoritesReducer,
  },
});
