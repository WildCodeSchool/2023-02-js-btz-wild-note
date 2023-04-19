//icons
import { HiHome } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { TfiLayoutGrid3 } from 'react-icons/tfi';

import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <HiHome style={{height: "2em", width: "2em", boxShadow: "var(--general-innerShadow)"}} />
        <FaSearch style={{height: "2em", width: "2em", boxShadow: "var(--general-innerShadow)"}}/>
        <TfiLayoutGrid3 style={{height: "2em", width: "2em", boxShadow: "var(--general-innerShadow)"}}/>
        <MdSettings style={{height: "2em", width: "2em", boxShadow: "var(--general-innerShadow)"}}/>
        </div>
  )
}



export default Navbar