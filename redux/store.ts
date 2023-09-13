import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listReducer from "./slice/listSlice";
import paginateReducer from "./slice/paginateSlice";
import storage from "redux-persist/lib/storage";
import lovePokemons from "./slice/lovedSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "pokemon-app",
  storage,
  whitelist: ["loved"],
};

const rootReducer = combineReducers({
  list: listReducer,
  paginate: paginateReducer,
  loved: lovePokemons,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export { persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
