import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import GlobalStyle from './styles/globalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
