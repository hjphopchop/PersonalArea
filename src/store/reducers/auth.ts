import {createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
interface AuthState {
    isAuth: boolean
}
const initialState:AuthState = {
    isAuth : true
}

export const Auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SetAuth: (state) => {
            state.isAuth = true;
        }
    }
})

export const {SetAuth} = Auth.actions
export const selectAuth = (state: RootState) => state.auth.isAuth
export default Auth.reducer