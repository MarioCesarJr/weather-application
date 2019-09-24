import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import api from './services/api';

import GlobalStyle from './styles/global';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '2cd1dd71b409212aaebe0070340661db';
const UNITS = 'metric'; // celsius

export default function App() {
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);

    const loadStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
    };

    async function getWeather(e) {
        e.preventDefault();

        const city = e.target.elements.city.value;

        try {
            setLoading(true);

            const response = await api.get('data/2.5/weather', {
                params: {
                    q: `${city},BR`,
                    units: UNITS,
                    appid: API_KEY,
                },
            });

            setWeather({
                temperature: Math.floor(response.data.main.temp),
                city: response.data.name,
                country: response.data.sys.country,
                temp_min: Math.floor(response.data.main.temp_min),
                temp_max: Math.floor(response.data.main.temp_max),
                humidity: response.data.main.humidity,
                description: response.data.weather[0].description,
            });
            console.log(response.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <GlobalStyle />
            <Title />
            <Form getWeather={getWeather} />

            {loading ? (
                <div className="loading">
                    <Loader
                        style={loadStyle}
                        type="TailSpin"
                        color="#fff"
                        width={30}
                        height={30}
                    />
                </div>
            ) : (
                <Weather
                    temperature={weather.temperature}
                    city={weather.city}
                    country={weather.country}
                    temp_min={weather.temp_min}
                    temp_max={weather.temp_max}
                    humidity={weather.humidity}
                    description={weather.description}
                />
            )}
        </>
    );
}
