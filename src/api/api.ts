import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUserRequest, IUserResponse } from './user/user.interface';
const API_URL = process.env.SERVER_URL;

interface IUser {
    id: number;
    createdAt: string;
    email: string;
    password: string;
    name: string;
    avatar: string;
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.225.156:4200' }),
    endpoints: builder => ({
        text: builder.query<IUser[], void>({
            query: () => '/',
        }),

        registerUser: builder.mutation<IUserResponse, IUserRequest>({
            query: data => ({
                url: '/api/auth/register',
                method: 'POST',
                body: data,
            }),
        }),

        login: builder.mutation<IUserResponse, void>({
            query: data => ({
                url: '/api/auth/login',
                method: 'POST',
                body: data,
            }),
        }),

        getGroup: builder.query<void, void>({
            query: () => '/api/groups/',
        }),

        addEducationInfo: builder.mutation<any, any>({
            query: data => ({
                url: '/api/user/info',
                method: 'PUT',
                body: data,
            }),
        }),

        getSchedule: builder.query<string, Object>({
            query: (group) => `/api/schedule?group=${group}`,
        }),

        forgot: builder.mutation<string, string>({
            query: data => ({
                url: '/api/auth/forgot',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useRegisterUserMutation, useLoginMutation, useForgotMutation, useGetScheduleQuery, useGetGroupQuery } =
    api;
