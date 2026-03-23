import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "../features/productsSlice";
import cartReducer from "../features/cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedProductsReducer = persistReducer(persistConfig, productsReducer);
const persistedCartReducer = persistReducer(
  { ...persistConfig, key: "cart" },
  cartReducer,
);

export const store = configureStore({
  reducer: {
    products: persistedProductsReducer,
    cart: persistedCartReducer,
  },
});

export const persistor = persistStore(store);
