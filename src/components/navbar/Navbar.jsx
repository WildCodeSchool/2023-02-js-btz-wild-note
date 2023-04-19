//icons
import {FaHome } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';

import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <button className='Navbar-Home'><FaHome style={{height: "2em", width: "2em", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}/></button>
        <button className='Navbar-Search'><FaSearch style={{height: "2em", width: "2em", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}/></button>
        <button className='Navbar-Grid'><TfiLayoutGrid3Alt style={{height: "2em", width: "2em", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}/></button>
        <button className='Navbar-Settings'><MdSettings style={{height: "2em", width: "2em", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}/></button>
    </div>
  )
}



export default Navbar