import React from 'react'
import Country from "./Country";
import Button from "./Button";

const ShowCountries = (props) => {
    if (props.countries.length === 0) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
    else if(props.countries.length === 1) {
        return (
            <div>
                <Country country={props.countries[0]} />
            </div>
        )
    } else {
        return (
            <div>
                {props.countries.map(country =>
                    <div key={country.name.common} >
                        {country.name.common}
                        <Button country={country} />
                        <br/>
                    </div>
                )}
            </div>
        )
    }
}

export default ShowCountries