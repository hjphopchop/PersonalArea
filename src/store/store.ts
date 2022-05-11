import {configureStore} from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userApi } from "../services/UserService";
import auth from "./reducers/auth"

 export const store = configureStore({
    reducer: {
        auth,
        [userApi.reducerPath] : userApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(userApi.middleware),
    
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
