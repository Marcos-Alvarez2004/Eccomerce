// REDUXJS-TOOLKIT
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
// APISLICE
import { apiSlice } from "./api/apiSlice";
// AUTHSLICE
import authReducer from "./features/auth/authSlice";
// FAVORITES REDUCER
import favoritesReducer from "../redux/features/favorites/favoriteSlice";
// LOCALSTORAGE
import { getFavoritesFromLocalStorage } from "../Utils/localStorage";
// CartSliceReducer
import CartSliceReducer from "./features/cart/cartSlice";
// ShopReducer
import shopReducer from "../redux/features/shop/shopSlice";

const initialFavorites = getFavoritesFromLocalStorage() || [];

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    favorites: favoritesReducer,
    cart: CartSliceReducer,
    shop: shopReducer,
  },

  preloadedState: {
    favorites: initialFavorites,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export default store;
