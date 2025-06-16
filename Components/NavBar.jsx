import React from 'react'
import {Link}from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar-brand">
                <Link to="/">Recipe Finder</Link>
            </div>
             <div className="navbar-links">
                <Link to ="/" className='nac-link'>Home</Link>
                <Link to ="/favorite" className='nav-link'>Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar
