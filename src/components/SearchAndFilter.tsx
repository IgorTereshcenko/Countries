import React, { FC } from 'react'
import '../style/searchAndFilter.scss';

interface SearchAndFilterProps {
    searchValue: string;
    sortValue:string;
    setSortValue: (e:React.ChangeEvent<HTMLSelectElement>) => void;
    setSearchValue: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

interface RegionFilter {
    value:string;
    name:string;
}

const SearchAndFilter:FC<SearchAndFilterProps> = ({
    searchValue, 
    setSearchValue,
    sortValue,
    setSortValue,
}) => {

    const regionFilter:RegionFilter[] = [
        {value: 'All', name: 'Все'},
        {value: 'Africa', name: 'Африка'},
        {value: 'Americas', name: 'Америка'},
        {value: 'Asia', name: 'Азия'},
        {value: 'Oceania', name: 'Океания'},
    ]

    return (
        <div className='searchAndFilter'>
            <input 
                type="text"
                value={searchValue}
                onChange={setSearchValue}
                className='searchAndFilter__search'
                placeholder='search for a country' />

            <select
                value={sortValue}
                onChange={setSortValue}
                className='searchAndFilter__sort'>   
                {regionFilter.map(reg =>
                    <option value={reg.value} key={reg.value}>
                        {reg.name}
                    </option>
                )}    
            </select>
        </div>
    )
}

export default SearchAndFilter;
