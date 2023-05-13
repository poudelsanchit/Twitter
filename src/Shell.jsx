import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import SingleTweet from './pages/SingleTweet';

const Shell = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/tweet:id' element={<SingleTweet />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Shell