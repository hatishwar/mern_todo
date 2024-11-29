// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#333', color: '#fff' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
    </nav>
);

export default Navbar;
