import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserRequest, IUserResponse } from "./user/user.interface";
import { IUser } from "../services/authService/auth.service";

const API_URL = process.env.SERVER_URL;

export const api = createApi({
  reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:4200/",
//   }),
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.31.214:3000' }),
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


