import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../../components/Header';
import Banner from '../Banner';
import Footer from '../../components/Footer';
import Characters from '../Characters';

const Home = () => {
    const [color] = useState('#040608');

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    return (
        <>
            <Header />
            <Banner />
            <h2 className='home-title'>Personagens Saga Star Wars</h2>
            <Characters />
            <Footer />
        </>
    );
}


export default Home;