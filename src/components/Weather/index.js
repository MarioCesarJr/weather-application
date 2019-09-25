import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import Skycons from 'react-skycons';
import { Container } from './styles';

export default function Weather({
    city,
    country,
    temperature,
    description,
    temp_min,
    temp_max,
    humidity,
    icon,
}) {
    const [getIcon, setGetIcon] = useState(icon);

    switch (getIcon) {
        case '01d':
            setGetIcon('CLEAR_DAY');
            break;

        case '02d':
            setGetIcon('PARTLY_CLOUDY_DAY');
            break;

        case '03d':
            setGetIcon('PARTLY_CLOUDY_DAY');
            break;

        case '04d':
            setGetIcon('CLOUDY');
            break;

        case '09d':
            setGetIcon('RAIN');
            break;

        case '10d':
            setGetIcon('SLEET');
            break;

        case '11d':
            setGetIcon('SLEET');
            break;

        case '13d':
            setGetIcon('SNOW');
            break;

        case '50d':
            setGetIcon('FOG');
            break;

        default:
            break;
    }

    return (
        <>
            {city && (
                <Container>
                    <div className="location">
                        {city}, {country}
                    </div>

                    <div className="align">
                        <div className="temperature">
                            {temperature}&#8451; {description}
                        </div>

                        <div className="icon">
                            <Skycons color="#535352" icon={getIcon} autoplay />
                        </div>
                    </div>

                    <div className="temp_min_max">
                        <MdArrowDownward color="#F7A432" size={20} />
                        {temp_min}&#730;
                        <MdArrowUpward color="#F7A432" size={20} />
                        {temp_max}&#730;
                    </div>

                    <div className="humidity">
                        Humidity: <span>{humidity}%</span>
                    </div>
                </Container>
            )}
        </>
    );
}

Weather.propTypes = {
    city: PropTypes.string,
    country: PropTypes.string,
    temperature: PropTypes.number,
    description: PropTypes.string,
    temp_min: PropTypes.number,
    temp_max: PropTypes.number,
    humidity: PropTypes.number,
    icon: PropTypes.string,
};

Weather.defaultProps = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    description: undefined,
    temp_min: undefined,
    temp_max: undefined,
    humidity: undefined,
    icon: undefined,
};
