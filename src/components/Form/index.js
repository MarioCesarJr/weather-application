import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ getWeather }) {
    return (
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="Enter city name here" />
            <button type="submit">Get Weather</button>
        </form>
    );
}

Form.propTypes = {
    getWeather: PropTypes.func.isRequired,
};
