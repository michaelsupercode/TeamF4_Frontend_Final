import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./Pages/home";

import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CocktailList from './Components/cocktailList';
import AddDrink from './Components/addDrink';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<Home />} />
		<Route path="/home" element={<App />} />
        <Route path='/cocktailList/:api' element={<CocktailList />} />
        <Route path='/addDrink' element={<AddDrink />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
