import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { IBorderCountries } from '../types/IBorderCountries';
import { ICountry } from '../types/ICountry';
import '../style/countriesNameList.scss';

interface CountriesNameListProps {
    country: ICountry[];
    borderCountry: IBorderCountries[];
}

const CountriesNameList:FC<CountriesNameListProps> = ({country,borderCountry}) => {

    const navigate = useNavigate();
    
    return (
        <div className='countriesNameList'>
            {country.map(item =>
            <div className="countriesNameList__wrapper" key={item.name}>
                
                <div className="countriesNameList__flag">
                    <img src={item.flag} alt="flag" />
                </div>

                <div className="countriesNameList__info">
                    <div className="countriesNameList__name">{item.name}</div>
                    <div className="countriesNameList__nativeName">
                        <b>Native name</b>{': '}
                        {item.nativeName}
                    </div>
                    <div className="countriesNameList__population">
                        <b>Population</b>{': '}
                        {item.population}
                    </div>
                    <div className="countriesNameList__region">
                        <b>Region</b>{': '}
                        {item.region}
                    </div>
                    <div className="countriesNameList__subRegion">
                        <b>Sub region</b>{': '}
                        {item.subregion}
                    </div>
                    <div className="countriesNameList__capital">
                        <b>Capital</b>{': '}
                        {item.capital}
                    </div>
                </div>

                <div className="countriesNameList__infoTwo">
                    <div className="countriesNameList__topLevelDomain">
                        <b>Top level domain</b>{': '}
                        {item.topLevelDomain.map(domain => 
                            <span key={domain}>{domain} </span>    
                        )}
                    </div>
                    <div className="countriesNameList__currencies">
                        <b>Currency</b>{': '}
                        {item.currencies.map(curr =>
                            <span key={curr.name}>{curr.name } </span>   
                        )}
                    </div>
                    <div className="countriesNameList__languages">
                        <b>Languages</b>{': '}
                        {item.languages.map(lang =>
                            <span key={lang.name}>{lang.name} </span>
                        )}
                    </div>
                </div>

                <div className="countriesNameList__borders">
                    <b>Border countries</b>{': '}
                    {!borderCountry.length ? <h3>no border country</h3> : borderCountry.map(b =>
                        <span 
                            key={b.name} 
                            onClick={() => navigate(`/name/${b.name}`)}>
                                {b.name} 
                        </span>   
                    )}
                </div>
            </div>
        )}
        </div>
    )
}

export default CountriesNameList;
