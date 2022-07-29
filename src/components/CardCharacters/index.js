import React from 'react';
import './style.css';

const CardCharacters = ({ name }) => {
    return (
        <div className='card-characters'>
            <img className='card-characters-image' alt='characters' src='https://i.pinimg.com/564x/dd/c9/ff/ddc9ff5824819cddc799da222a2a2794.jpg' />
            <label className='card-characters-name'>{name}</label>
        </div>
    )
}

export default CardCharacters;