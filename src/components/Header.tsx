import React, { useState } from 'react';
import { NavLink, Link } from 'react-router';
import '../styles/Header.css'; // Create a CSS file for styling

const Header: React.FC = () => {

    return (
        <div className="header">
            <Link className="header-title" to="/">Sophia Mathis</Link>
            <div className='header-tabs'>
                <Link className='header-tab' to="/about">About</Link>
                <Link className='header-tab' to="/projects">Projects</Link>
                <Link className='header-tab' to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Header;