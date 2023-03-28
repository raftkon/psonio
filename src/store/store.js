import { configureStore } from "@reduxjs/toolkit";
// import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// don't use logger if it is production, filter boolean so it returns empty array []
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middleWares),
});

export const persistor = persistStore(store);
