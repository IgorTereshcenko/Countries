import React, { FC } from 'react'
import { ICountries } from '../types/ICountries'
import '../style/countriesItem.scss';
import { useNavigate } from 'react-router-dom';

interface CountriesItemProps {
    country: ICountries;
}

const CountriesItem:FC<CountriesItemProps> = ({country}) => {

    const navigate = useNavigate()

    return (
        <div className='countriesItem' onClick={() => navigate(`/name/${country.name}`)}>
            <div className="countriesItem__flag">
                <img src={country.flags.svg} alt="flag" />
            </div>
            <div className="countriesItem__descr">
                <div className="countriesItem__name">{country.name}</div>
                <div className="countriesItem__population"><strong>Population</strong>: {country.population}</div>
                <div className="countriesItem__region"><strong>Region</strong>:{country.region}</div>
                <div className="countriesItem__capital"><strong>Capital</strong>:{country.capital}</div>
            </div>    
        </div>
    )
}

export default CountriesItem;
