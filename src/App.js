import React from 'react';
import {BrowserRouter, Routes,Route } from "react-router-dom";
import Menu from './Menu';            // 새로 만들 컴포넌트
import Start from './Start';
import Receipt from './Receipt';
import Filter from './test/Filter';
import './Normalize.css';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu/>} />
                <Route path="/Start" element={<Start/>} />
                <Route path="/Hamburger" element={<Menu/>} />
                <Route path="/Hamburger2" element={<Menu/>} />
                <Route path="/SIDE" element={<Menu/>} />
                <Route path="/Beverage" element={<Menu/>} />
                <Route path="/Receipt" element={<Receipt/>} />
                <Route path="/test/filter" element={<Filter/>} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;