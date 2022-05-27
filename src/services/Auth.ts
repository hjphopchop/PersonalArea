import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface UserAuth {
  login: string;
  password: string;
  access_token: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://myauthsimple.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<UserAuth, Partial<UserAuth>>({
      query: (body) => ({
        url: `/api/auth/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});
