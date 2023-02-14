import React, { FC } from 'react'
import { ICountries } from '../types/ICountries';
import CountriesItem from './CountriesItem';
import '../style/countriesList.scss';

interface CountriesListProps {
    countries: ICountries[] | undefined
}

const CountriesList:FC<CountriesListProps> = ({countries}) => {

    if(countries?.length === 0) {
        return <h1>Страны не найдены</h1>
    }
    
    return (

        <div className='countriesList'>
                {countries?.map(country => 
                    <CountriesItem country={country} key={country.name}/>    
                )}
        </div>
    )
}

export default CountriesList;
