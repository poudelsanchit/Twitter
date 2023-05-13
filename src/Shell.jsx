import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'

const Shell = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Shell