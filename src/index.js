import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
//cấu hình react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ReactForm from './pages/ReactForm/ReactForm';
import ReacttLifeCycle from './pages/ReactLifeCycle/ReacttLifeCycle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App />}>
        <Route path='' element={<Home />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='reactform' element={<ReactForm />}></Route>
        <Route path='*' element={<Navigate to=''></Navigate>}></Route>
        <Route path='lifecycle' element={<ReacttLifeCycle/>}></Route>
      </Route>

    </Routes>
  </BrowserRouter>
);



