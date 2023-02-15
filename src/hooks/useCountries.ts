import { useMemo } from "react";
import { ICountries } from "../types/ICountries";

export const useSortCountries = (countries:ICountries[], sort:string):ICountries[] => {

    const sortedCountries = useMemo(() => {
    
        if(sort && sort !== 'All') {
            return [...countries].filter(country => country.region === sort);
        } else {
            return countries;
        } 
       
    }, [countries,sort])

    return sortedCountries;
}

export const useCountries = (countries:ICountries[], sort:string, query: string):ICountries[] => {

    const sortedCountries = useSortCountries(countries,sort);

    const sortedAndSearhCountries = useMemo(() => {
        return sortedCountries.filter(country => country.name.toLowerCase().includes(query))
    },[sortedCountries,query])

    return sortedAndSearhCountries;
}