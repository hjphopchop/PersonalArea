import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AuthUser } from "../../types/AuthUser";
interface AuthState {
  isAuth: boolean;
  user: AuthUser;
}
const initialState: AuthState = {
  isAuth: false,
  user: {} as AuthUser,
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
