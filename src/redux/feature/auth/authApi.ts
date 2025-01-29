import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userCredentials) => ({
        url: "/auth/login",
        method: "POST",
        body: userCredentials,
      }),
      invalidatesTags: ["User"],
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/create-user",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation, useCreateUserMutation } = authApi;
