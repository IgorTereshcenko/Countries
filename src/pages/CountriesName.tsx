import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { countriesAPI } from '../services/CountriesService';

const CountriesName = () => {

    const {name} = useParams();
    const navigate = useNavigate();
    const {data:country=[], isLoading, error} = countriesAPI.useFetchNameCountriesQuery(name);
    const borderCountry = country?.map(item => item.borders.map(b => b)).join(',')
    const {data:bord} = countriesAPI.useFetchFilterByCodeQuery(borderCountry);

    if(isLoading) {
        return <h1>loading</h1>
    } else if (error) {
        return <h1>error</h1>
    }

    return (
        <div className='countriesName'>
            {country?.map(item =>
                <div className="countriesName__wrapper">
                    <div className="countriesName__flag">
                        <img src={item.flag} alt="flag" />
                    </div>
                    <div className="countriesName__info">
                        <div className="countriesName__name">{item.name}</div>
                        <div className="countriesName__nativeName">{item.nativeName}</div>
                        <div className="countriesName__population">{item.population}</div>
                        <div className="countriesName__subRegion">{item.subregion}</div>
                        <div className="countriesName__capital">{item.capital}</div>
                        <div className="countriesName__topLevelDomain">
                            {item.topLevelDomain.map(domain => 
                                domain    
                            )}
                        </div>
                        <div className="countriesName__currencies">
                            {item.currencies.map(curr =>
                                <span>{curr.name }</span>   
                            )}
                        </div>
                        <div className="countriesName__languages">
                        <b>Currency</b>{': '}
                            {item.languages.map(lang =>
                                <span>{lang.name} </span>
                            )}
                        </div>

                        <div className="countriesName__borders">
                            {bord?.map(b =>
                                <span onClick={() => navigate(`/name/${b.name}`)}>{b.name} </span>   
                            )}
                        </div>
                    </div>
                </div>  
            )}
        </div>
    )
}

export default CountriesName;
