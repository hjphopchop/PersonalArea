// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";
import { RootState, store } from "../store";

interface AuthState {
  isAuth: boolean;
}
const initialState: AuthState = {
  isAuth: false,
};

export const Auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = Auth.actions;
export const selectAuth = (state: RootState) => state.auth.isAuth;
export default Auth.reducer;
