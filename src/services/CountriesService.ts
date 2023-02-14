import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import { ICountries } from "../types/ICountries";

export const countriesAPI = createApi({
    reducerPath: 'countriesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://restcountries.com/v2'}),
    endpoints: (build) => ({
        fetchAllCountries: build.query<ICountries[],any>({
            query: () => ({
                url: '/all'
            })
        })
    })
})