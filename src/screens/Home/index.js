import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Banner from '../Banner';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />

            <h2 className='home-title'>Personagens Saga Star Wars</h2>
        </div>
    );
}


export default Home;