import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import { IBorderCountries } from "../types/IBorderCountries";
import { ICountries } from "../types/ICountries";
import { ICountry } from "../types/ICountry";

export const countriesAPI = createApi({
    reducerPath: 'countriesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://restcountries.com/v2'}),
    endpoints: (build) => ({
        fetchAllCountries: build.query<ICountries[],any>({
            query: () => ({
                url: '/all'
            })
        }),
        fetchNameCountries: build.query<ICountry[],any>({
            query: (name) => ({
                url: `/name/${name}`
            })
        }),
        fetchFilterByCode: build.query<IBorderCountries[],any>({
            query: (codes) => ({
                url: `/alpha?codes=${codes}`
            })
        })
    })
})