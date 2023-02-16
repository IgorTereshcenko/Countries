import React, { FC, useEffect, useState } from 'react'
import { countriesAPI } from '../services/CountriesService';
import { useNavigate, useParams } from 'react-router-dom';
import CountriesNameList from '../components/CountriesNameList';
import '../style/countries.scss';

const CountriesName:FC = () => {

    const {name} = useParams();
    const navigate = useNavigate();

    const {data:country=[], isLoading, error} = countriesAPI.useFetchNameCountriesQuery(name);
    const [borders, setBorders] = useState('');
    const {data: borderCountry=[]} = countriesAPI.useFetchFilterByCodeQuery(borders);
   
    useEffect(() => {
        country.map(item => {
            if(item.borders) {
                setBorders(item.borders.join(','));
            }
        })
    },[country])
    
    if(isLoading) {
        return <h1>loading</h1>
    } else if (error) {
        return <h1>error</h1>
    }

    return (
        <div className='countriesName'>
            <div className="container">
            <button onClick={() => navigate('/')} className='countries__back'> <span>&#8592;</span> Back</button>
                <CountriesNameList
                    country={country}
                    borderCountry={borderCountry}/>
            </div>
        </div>
    )
}

export default CountriesName;
