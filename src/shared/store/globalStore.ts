import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import questionnaireSlice from "./questionnaireStore/questionnaireReducer";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["questionnaire"], //  will only be stored in session storage
};

const rootReducer = combineReducers({
  questionnaire: questionnaireSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const globalStore = configureStore({
  devTools: true,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(globalStore);

// without the persist store below

// const globalStore = configureStore({
//   devTools: true,
//   reducer: rootReducer,
// });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;

export const questionnaireActions = questionnaireSlice.actions;

export default globalStore;
