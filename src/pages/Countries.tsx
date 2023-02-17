import React, { FC, useState } from 'react'
import CountriesList from '../components/CountriesList';
import { countriesAPI } from '../services/CountriesService';
import SearchAndFilter from '../components/SearchAndFilter';
import { useCountries } from '../hooks/useCountries';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Countries:FC = () => {

    const {data: countries=[], error, isLoading} = countriesAPI.useFetchAllCountriesQuery(null);
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState('');

    const sortedAndSearhCountries = useCountries(countries,sortValue,searchValue);
    
    if(isLoading) {
        return <Loading/>
    } else if (error) {
        return <Error/>
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

