import React, { useState } from 'react'
import {instanceAxiosCountry} from "../axios/axios";
import ShowCountries from "./ShowCountries";

const Search = () => {
    const [countries, setCounties] = useState([])
    const [search, setSearch] = useState('')

    const searchCountries = (event) => {
        event.preventDefault()

        instanceAxiosCountry.get(`/name/${search}`)
            .then(response => {
                if(response.data.length >= 10) {
                    setCounties([]);
                }
                else{
                    setCounties(response.data);
                }
            });
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <form onSubmit={searchCountries}>
                <div>
                    find countries
                    <input value={search} onChange={handleSearch}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <ShowCountries countries={countries} />
        </div>
    )
}

export default Search