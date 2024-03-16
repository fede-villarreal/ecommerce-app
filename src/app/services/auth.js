import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiWeb = process.env.API_WEB

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://identitytoolkit.googleapis.com/v1/"}),
    endpoints:(builder) => ({
        register:builder.mutation({
            query: (user) => ({
                url:`accounts:signUp?key=${apiWeb}`,
                method:"POST",
                body:user
            })
        }),
        login: builder.mutation({
            query: (user) => ({
                url:`accounts:signInWithPassword?key=${apiWeb}`,
                method:"POST",
                body:user
            })
        })
    })
})

export const {useRegisterMutation,useLoginMutation} = authApi