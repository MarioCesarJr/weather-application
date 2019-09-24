import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
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
        <>
            {city && (
                <Container id="id01">
                    {city && country && (
                        <p className="location">
                            {city}, {country}
                        </p>
                    )}

                    {temperature && description && (
                        <p className="temperature">
                            {temperature}&#8451; {description}
                        </p>
                    )}

                    {temp_min && temp_max && (
                        <p className="temp_min_max">
                            <MdArrowDownward color="#F7A432" size={20} />
                            {temp_min}&#730;
                            <MdArrowUpward color="#F7A432" size={20} />
                            {temp_max}&#730;
                        </p>
                    )}

                    {humidity && (
                        <p className="humidity">
                            Humidity: <span>{humidity}%</span>
                        </p>
                    )}
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
