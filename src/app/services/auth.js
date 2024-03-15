import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = process.env.API_KEY

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://identitytoolkit.googleapis.com/v1/" }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (user) => ({
                url: `accounts:signUp?key=${apiKey}`,
                method: "POST",
                body: user
            })
        }),
        login: builder.mutation({
            query: (user) => ({
                url: `accounts:signInWithPassword?key=${apiKey}`,
                method: "POST",
                body: user
            })
        })
    })
})

export const { useRegisterMutation, useLoginMutation } = authApi