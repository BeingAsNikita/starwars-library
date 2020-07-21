import React, { useEffect, useState } from 'react';
import '../Search/Search.scss';
import useDebounce from '../../utils/useDebounce';

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {
            if (debouncedSearchTerm.length > 0) {
                console.log(debouncedSearchTerm.length)
                props.getDataFromSearching(debouncedSearchTerm)
            } /* else if (debouncedSearchTerm.length === 0) {
                props.getPeoples(1)
            } */
        },
        [debouncedSearchTerm]
    );

    return (
        <>
            <input className="search" type="text" placeholder="Search by name"

                onFocus={() => {
                    props.isSearching(true)
                }}

                onKeyPress={e => {
                    if (e.keyCode === 13) {
                        setSearchTerm(e.target.value)
                    }
                }}

                onChange={e => {

                    setSearchTerm(e.target.value)
                }}
                onBlur={() => {
                    props.getPeoples()
                    props.isSearching(false)
                }}></input>
        </>
    )
}

export default Search;