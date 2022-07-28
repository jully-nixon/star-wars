import React from 'react';
import Home from '../screens/Home';
import { Routes, Route } from 'react-router-dom';

const Rotas = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </div>
    )
}


export default Rotas;