import React, { useEffect, useState } from 'react';
import '../Search/Search.scss';
import useDebounce from '../../utils/useDebounce';

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {
            if (debouncedSearchTerm) {
    
                props.getDataFromSearching(debouncedSearchTerm)
            }
        },
        [debouncedSearchTerm]
    );

    return (
        <>
            <input className="search" type="text"
                onChange={e => setSearchTerm(e.target.value)} ></input>
        </>
    )
}

export default Search;