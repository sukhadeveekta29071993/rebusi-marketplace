import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../app/rootReducer";
import {
  clearStoredUser,
  saveStoredUser,
} from "../features/auth/utils/authStorage";

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Persist only the auth user profile.
store.subscribe(() => {
  const user = store.getState().auth.user;

  if (user) {
    saveStoredUser(user);
  } else {
    clearStoredUser();
  }
});
