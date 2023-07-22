import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/img/nav/nav-logo.png';
import orb from '/orb.png';
import wave from '/wave.png';
import circle from '/circle.png';

import './navbar.scss'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <div className='logo'>
                    <a href='#top' >
                        <img src={circle} alt='logo' />
                    </a>
                </div>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#212529' }} />)
                        : (<FaBars size={30} style={{ color: '#212529' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#portfolio' onClick={closeMenu}>Portfolio</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar