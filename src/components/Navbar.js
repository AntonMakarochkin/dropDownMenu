import React, {useState} from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Drop from './Drop'


function Navbar() {

    const [click, setClick] = useState(false)
    const [drop, setDrop] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDrop(false);
        } else {
            setDrop(true);
        }
    }


    return (
        <nav className="navbar">
         <Link to="/" className='navbar-logo'>
             EPIC
         </Link>
         <div className='menu-icon' onClick={handleClick}>
             <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
         </div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'} >
             <li className='nav-item'>
                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
             </li>
             <li className='nav-item'>
                 <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services<i className='fas fa-caret-down'/></Link>
                 {drop && <Drop/>}
             </li>
             <li className='nav-item'>
                 <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>Contact-us</Link>
             </li>
             <li className='nav-item'>
                 <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign UP</Link>
             </li>
         </ul>
         <Button/>
        </nav>
    )
}

export default Navbar

