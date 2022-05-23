// @ts-nocheck

import { createSlice } from "@reduxjs/toolkit";
import { json } from "stream/consumers";
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
    login: (state) => {
      state.isAuth =true;
      
    },
    logout: (state) => {
      state.isAuth =false;
      
    },
  },
});

export const localStorageMiddleware = ({getState}) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('login', JSON.stringify(getState().auth));
    return result
  }
}

export const reHydrateStore = () => {
  if(localStorage.getItem("login") !== null) {
    return JSON.parse(localStorage.getItem("login"));
  }
}

export const { login, logout } = Auth.actions;
export const selectAuth = (state: RootState) => state.auth.isAuth;
export default Auth.reducer;
