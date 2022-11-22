import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

export default function Header() {
    return(
        <div className='header'>
            <img src={Logo} alt='' className='logo'/>
            <ul className='Header-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li> Why Us</li>
                <li> Planes</li>
                <li> Testimonials</li>
            </ul>


        </div>
    )
}