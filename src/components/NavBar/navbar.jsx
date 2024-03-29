import React, { useState } from 'react'
import Logo from '../../../public/images/Logo.png'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navitems=[
        {path:'/',title:'Start a search'},
        {path:'/my-job',title:'My Jobs'},
        {path:'/salary',title:'Salary Estimat'},
        {path:'/post-job',title:'Post A Job'},
    ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
        <a className='flex items-center gap-2 text-2xl text-slate-950' href="/">
            <img className='nav-bar-logo' src={Logo} alt="logo" />
            <span>NiceJob</span>
        </a>
            {/* <!-- nav items for larger device --> */}
            <ul className='hidden md:flex gap-12 '>
                {
                    navitems.map(({path,title})=>(
                        <li key={path} className='text-base text-primary'>
                            <NavLink
                                to={path}
                                className={({ isActive}) =>
                                    isActive ? "active" : ""
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            {/* singup and login button */}
            <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                <Link to='/login' className='py-2 px-5 border rounded'>Login</Link>
                <Link to='/signup' className='py-2 px-5 border rounded bg-blue text-white'>Sign Up</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar