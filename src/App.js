import React from 'react';
import Rotas from './routes';
import { BrowserRouter } from 'react-router-dom';
import './mediaQuery.css';
import './App.css';
import './mediaQuery.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </div>
  );
}

export default App;