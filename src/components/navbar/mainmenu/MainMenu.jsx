import React from 'react'
import './MainMenu.css'
import {Link} from 'react-router-dom'

function MainMenu() {
  return (
    <div className="mainmenu">
        <div className="container flex-row aic jcsb">
            <a href="/" className="name">CRYPTO BANKING</a>
            <div className="flex-row aic">
                <Link to="/">Hompage</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/service">Services</Link>
                <Link to="/news">News</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login" className='login'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default MainMenu