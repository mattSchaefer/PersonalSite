import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default (
    <Router className="flex-col">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
        </Routes>
        <Footer />
    </Router>
);