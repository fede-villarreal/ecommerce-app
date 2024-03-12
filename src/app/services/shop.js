import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ecommerce-app-villarreal-default-rtdb.firebaseio.com/' }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/categories.json'
        }),
        getProductsByCategory: builder.query({
            query: (category) => `/products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                const data = Object.values(response)
                return data
            }
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}.json`
        })
    })
})

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductByIdQuery } = shopApi