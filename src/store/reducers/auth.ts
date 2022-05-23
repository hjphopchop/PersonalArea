// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
    ChangeAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export const { ChangeAuth } = Auth.actions;
export const selectAuth = (state: RootState) => state.auth.isAuth;
export default Auth.reducer;
