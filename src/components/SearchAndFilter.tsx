import React, { FC } from 'react'
import { RegionFilter } from '../pages/Countries';

interface SearchAndFilterProps {
    searchValue: string;
    sortValue:string;
    setSortValue: (e:React.ChangeEvent<HTMLSelectElement>) => void;
    setSearchValue: (e:React.ChangeEvent<HTMLInputElement>) => void;
    regionFilter: RegionFilter[];
}

const SearchAndFilter:FC<SearchAndFilterProps> = ({
    searchValue, 
    setSearchValue,
    sortValue,
    setSortValue,
    regionFilter
}) => {

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
                onChange={setSortValue}>   
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
