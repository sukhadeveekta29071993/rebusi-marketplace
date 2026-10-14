import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { AuthResponse, AuthState, User } from "../types/auth.types";

import {
  clearAuthStorage,
  getStoredToken,
  getStoredUser,
  setAuthStorage,
} from "../utils/authStorage";

const storedUser = getStoredUser();
const storedToken = getStoredToken();

const initialState: AuthState = {
  user: storedUser,
  token: storedToken,

  isAuthenticated: Boolean(storedUser && storedToken),

  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    loginSuccess: (state, action: PayloadAction<AuthResponse>) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;

      setAuthStorage(user, token);
    },

    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;

      if (state.token) {
        setAuthStorage(action.payload, state.token);
      }
    },

    setAuthError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    clearAuthError: (state) => {
      state.error = null;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;

      clearAuthStorage();
    },
  },
});

export const {
  setAuthLoading,
  loginSuccess,
  updateUser,
  setAuthError,
  clearAuthError,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
