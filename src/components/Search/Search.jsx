import React, { useEffect, useState } from 'react';
import '../Search/Search.scss';
import useDebounce from '../../utils/useDebounce';

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const [active, setActive] = useState(false)

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
            <div className="search__wrap">
                <div className="search__container">
                    <label htmlFor="search"
                        className={"search__label" + (active ? " search__label--active" : '')}>Search by name</label>
                    <input className="search" type="text" id="search" value={searchTerm}

                        onFocus={() => {
                            setActive(true)
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
                            setSearchTerm('')
                            setActive(false)
                            props.getPeoples()
                            props.isSearching(false)
                        }}></input>
                </div>
          
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 14.6667H15.6133L15.24 14.3067C16.5467 12.7867 17.3333 10.8133 17.3333 8.66667C17.3333 3.88 13.4533 0 8.66667 0C3.88 0 0 3.88 0 8.66667C0 13.4533 3.88 17.3333 8.66667 17.3333C10.8133 17.3333 12.7867 16.5467 14.3067 15.24L14.6667 15.6133V16.6667L21.3333 23.32L23.32 21.3333L16.6667 14.6667ZM8.66667 14.6667C5.34667 14.6667 2.66667 11.9867 2.66667 8.66667C2.66667 5.34667 5.34667 2.66667 8.66667 2.66667C11.9867 2.66667 14.6667 5.34667 14.6667 8.66667C14.6667 11.9867 11.9867 14.6667 8.66667 14.6667Z" fill="#808080" />
            </svg>

  
            </div >
        </>
    )
}

export default Search;