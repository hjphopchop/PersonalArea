
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { User } from "../types/User"


export const userApi = createApi({
reducerPath: "userApi",
baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
endpoints: (build) => ({
    fetchAllUsers: build.query<User[],any>({
        query:() => ({
            url: '/users'
        }),
    }),
})
})