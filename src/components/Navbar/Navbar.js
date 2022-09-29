import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='nav_Container'>
            <h1><a href="#home">Exertizzer</a></h1>
            <div>
                <a href="#blog">Blogs</a>
                <a href="#calculation">Calculation</a>
            </div>
        </nav>
    );
};

export default Navbar;