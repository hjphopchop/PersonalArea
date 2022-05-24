import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../types/User";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://usersssbackend.herokuapp.com/",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllUsers: build.query<User[], any>({
      query: () => ({
        url: "/users",
      }),
      providesTags: (result) => ["Post"],
    }),
    createUser: build.mutation<User, User>({
      query: (user) => ({
        url: `/users`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Post"],
    }),
    deleteUser: build.mutation<User, User>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
