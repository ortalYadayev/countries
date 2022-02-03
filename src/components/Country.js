import React, {useEffect, useState} from 'react'
import {instanceAxiosWeather} from "../axios/axios";

const Country = (props) => {
    const latlng = props.country.latlng
    const [weather, setWeather] = useState({})

    useEffect(() => {
        const eventHandler = response => {
            setWeather(response.data)
        }

        instanceAxiosWeather.get(`/onecall?lat=${latlng[0]}&lon=${latlng[1]}&exclude=daily&appid=${process.env.REACT_APP_API_KEY}`)
            .then(eventHandler)
    }, [])

    const languages = Object.values(props.country.languages);

    return (
        <div>
            <h2>
                {props.country.name.common}
            </h2>
            <p>
                capital {props.country.capital}
            </p>
            <p>
                population {props.country.population}
            </p>
            <h3>
                languages
            </h3>
            <ul>
                {languages.map(language =>
                    <li key={language}>
                        {language}
                    </li>
                )}
            </ul>
            <img src={props.country.flags.png} alt="flag" />
            <h3>
               Weather in {props.country.capital}
            </h3>
            <div>
                <b>temperature: </b>
                {weather ? weather.current.temp : ''} Celcius
            </div>
            <div>
                <b>wind: </b>
                {weather ? weather.current.wind_deg : ''} mph direction SSW
            </div>
        </div>
    )
}

export default Country