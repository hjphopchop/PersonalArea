import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface authState {
  isAuth: boolean;
}
const initialState: authState = {
  isAuth: false,
};

export const auth = createSlice({
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

export const { login, logout } = auth.actions;
export const selectAuth = (state: RootState) => state.auth.isAuth;
export default auth.reducer;
