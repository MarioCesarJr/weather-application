import React, { useState } from 'react';

import api from './services/api';
// import { Container } from './styles';

const API_KEY = '2cd1dd71b409212aaebe0070340661db';
const COUNTRY = 'BR';
const UNITS = 'metric'; // celsius

export default function App() {
    const [weather, setWeather] = useState({});

    async function getWeather(e) {
        e.preventDefault();

        const city = e.target.elements.city.value;

        const response = await api.get(
            `/weather?q=${city},${COUNTRY}&appid=${API_KEY}&units=${UNITS}`
        );

        setWeather({
            temperature: Math.floor(response.data.main.temp),
            city: response.data.name,
            country: response.data.sys.country,
            temp_min: response.data.main.temp_min,
            temp_max: response.data.main.temp_max,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
        });

        console.log(response.data);
    }

    return (
        <>
            <form onSubmit={getWeather}>
                <input
                    type="text"
                    name="city"
                    placeholder="Enter city name here"
                />
                <button type="submit">Get Weather</button>
            </form>
            <div>
                {weather.city && weather.country && (
                    <p>
                        {weather.city}, {weather.country}
                    </p>
                )}

                {weather.temperature && weather.description && (
                    <p>
                        {weather.temperature} &#8451; {weather.description}
                    </p>
                )}

                {weather.temp_min && weather.temp_max && (
                    <p>
                        {weather.temp_min}&#730; {weather.temp_max}&#730;
                    </p>
                )}

                {weather.humidity && <p>Humidity: {weather.humidity}</p>}
            </div>
        </>
    );
}
