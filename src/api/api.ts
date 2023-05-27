import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserRequest, IUserResponse } from "./user/user.interface";
const API_URL = process.env.SERVER_URL;

interface IUser {
  id: number,
  createdAt: string,
  email: string,
  password: string,
  name: string,
  avatar: string,
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.31.214:4200" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUser[], void>({
      query: () => "/",
    }),

    registerUser: builder.mutation<IUserResponse, IUserRequest>({
        query: (data) => ({
          url: "/api/auth/register",
          method: "POST",
          body: data,
        }),
      }),

    login: builder.mutation<IUserResponse, IUserRequest>({
      query: (data) => ({
        url: "/api/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    isRightPassword: builder.query<boolean, void>({
      query: () => "/api/auth/password",

    })
  }),
});

export const {useRegisterUserMutation, useLoginMutation, useIsRightPasswordQuery} = api


