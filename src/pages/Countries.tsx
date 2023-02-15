import React, { FC, useState } from 'react'
import CountriesList from '../components/CountriesList';
import { countriesAPI } from '../services/CountriesService';
import SearchAndFilter from '../components/SearchAndFilter';
import { useCountries } from '../hooks/useCountries';

const Countries:FC = () => {

    const {data: countries=[], error, isLoading} = countriesAPI.useFetchAllCountriesQuery(null);
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState('');

    const sortedAndSearhCountries = useCountries(countries,sortValue,searchValue);
    
    if(isLoading) {
        return <h1>loading</h1>
    } else if (error) {
        return <h1>error</h1>
    }

    return (

        <div className='countries'>
            <div className="container">
                <SearchAndFilter
                    searchValue={searchValue}
                    setSearchValue={(e) => setSearchValue(e.target.value)}
                    sortValue={sortValue}
                    setSortValue={(e) => setSortValue(e.target.value)}/>
                <CountriesList countries={sortedAndSearhCountries}/>
            </div> 
        </div>
    )
}

export default Countries;

