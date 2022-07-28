import React from 'react';
import BannerImage from '../../assets/images/banner.jpg';
import './style.css';

const Banner = () => {
    return (
        <div id='banner'>
            <img className='banner-image' alt='banner' src={BannerImage} />
        </div>
    )
}

export default Banner;