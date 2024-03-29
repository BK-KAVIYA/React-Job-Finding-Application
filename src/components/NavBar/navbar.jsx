import React, { useState } from 'react'
import Logo from '../../../public/images/Logo.png'
import './Navbar.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <header>
        <nav>
            <img className='nav-bar-logo' src={Logo} alt="logo" />
            <a href="/">Nice Job</a>
        </nav>
    </header>
  )
}

export default Navbar