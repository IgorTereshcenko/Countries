import React, { FC } from 'react'
import { ICountries } from '../types/ICountries'
import '../style/countriesItem.scss';

interface CountriesItemProps {
    country: ICountries;
}

const CountriesItem:FC<CountriesItemProps> = ({country}) => {

    return (
        <div className='countriesItem'>
            <div className="countriesItem__flag">
                <img src={country.flags.svg} alt="flag" />
            </div>
            <div className="countriesItem__descr">
                <div className="countriesItem__name">{country.name}</div>
                <div className="countriesItem__population">Population: {country.population}</div>
                <div className="countriesItem__region">Region:{country.region}</div>
                <div className="countriesItem__capital">Capital:{country.capital}</div>
            </div>    
        </div>
    )
}

export default CountriesItem;
