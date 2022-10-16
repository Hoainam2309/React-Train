import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
//cấu hình react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import About from './pages/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App />}>
        <Route index element={<Home />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='about' element={<About />}></Route>
      </Route>

    </Routes>
  </BrowserRouter>
);



