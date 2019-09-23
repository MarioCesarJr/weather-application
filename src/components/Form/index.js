import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { Container } from './styles';

export default function Form({ getWeather }) {
    return (
        <Container>
            <form onSubmit={getWeather}>
                <input
                    type="text"
                    name="city"
                    placeholder="Enter city name here"
                />
                <button type="submit">
                    <MdSearch size="25" color="#667581" />
                </button>
            </form>
        </Container>
    );
}

Form.propTypes = {
    getWeather: PropTypes.func.isRequired,
};
