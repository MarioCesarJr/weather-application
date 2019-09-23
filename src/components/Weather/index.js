import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Weather({
    city,
    country,
    temperature,
    description,
    temp_min,
    temp_max,
    humidity,
}) {
    return (
        <Container>
            {city && country && (
                <p>
                    {city}, {country}
                </p>
            )}

            {temperature && description && (
                <p>
                    {temperature} &#8451; {description}
                </p>
            )}

            {temp_min && temp_max && (
                <p>
                    {temp_min}&#730; {temp_max}&#730;
                </p>
            )}

            {humidity && <p>Humidity: {humidity}</p>}
        </Container>
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
};

Weather.defaultProps = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    description: undefined,
    temp_min: undefined,
    temp_max: undefined,
    humidity: undefined,
};
