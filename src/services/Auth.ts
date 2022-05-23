import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Us {
  login: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<Us, Partial<Us>>({
      query: (body) => ({
        url: `/api/auth/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});
