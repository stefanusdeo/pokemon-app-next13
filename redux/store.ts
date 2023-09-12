import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./slice/listSlice";
import paginateReducer from "./slice/paginateSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    listReducer,
    paginateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
