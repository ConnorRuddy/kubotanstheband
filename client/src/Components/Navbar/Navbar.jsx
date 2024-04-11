import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../Assets/Photos/logo.jpeg'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-title">
         <img src={logo} className='logo' alt='kubotans-logo' />
        </div>
        <div className="navbar-menu">
        <ul className="navbar-list">
          <a href= '#about'>
          <li className="navbar-list-item">
            ABOUT
          </li>
          </a>
          <a href='#tour'>
          <li className="navbar-list-item">
            TOUR DATES
          </li>
          </a>
          <li className='navbar-list-item'>
        </li>
        </ul>  
      </div>
      <a href="mailto:Kubotans@gmail.com?subject=Booking"> <button>BOOK US</button></a>
    </div>
  )
}
