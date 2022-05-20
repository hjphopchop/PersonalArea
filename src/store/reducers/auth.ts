import { createSlice} from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  user:any;
}
const initialState: AuthState = {
  user: null,
};



export const Auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state,action) => {
      state.user = action.payload;
     
    },
    logout: (state) => {
      state.user = null
    }
  },
});

export const { login, logout } = Auth.actions;
export const selectAuth = (state: RootState) => state.auth.user;
export default Auth.reducer;
