// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TodoApp from './components/TodoApp';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App = () => (
    <Router>
        <Navbar />
        <div style={{ paddingBottom: '50px' }}> {/* Padding for footer */}
            <Routes>
                <Route path="/" element={<TodoApp />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
        <Footer />
    </Router>
);

export default App;
