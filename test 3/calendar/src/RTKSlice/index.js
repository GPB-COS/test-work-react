import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rtkSlice from "./rtkslice";

const rootReducer = combineReducers({ toolkit: rtkSlice });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
