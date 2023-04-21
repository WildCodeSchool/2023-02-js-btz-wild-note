//icons
import {FaHome } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';

import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';



function Navbar() {

 
  const {pathname} = useLocation();
  const splitlocation = pathname.split('/');

  return (
    <div className='Navbar'>
      <NavLink to='/'>
        <button id='Navbar-Home' >
          <FaHome 
           className={splitlocation[1] === "" ? "active" : ""}
          style={{ height: "2em", width: "2em", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }} />
        </button>
      </NavLink>
      <NavLink 
      to='/search'>
        <button className='Navbar-Search'>
          <FaSearch 
          className={splitlocation[1] === "search" ? "active" : ""}
          style={{ height: "2em", width: "2em", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }} />
        </button>
      </NavLink>
      <NavLink 
      to='/library'>
        <button className='Navbar-Grid'>
          <TfiLayoutGrid3Alt
          className={splitlocation[1] === "library" ? "active" : ""}
          style={{ height: "2em", width: "2em", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }} />
        </button>
      </NavLink>
      <NavLink 
      to='/settings'>
      <button className='Navbar-Settings'>
        <MdSettings 
        className={splitlocation[1] === "settings" ? "active" : ""}
        style={{ height: "2em", width: "2em", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", }} />
      </button>
      </NavLink>
    </div>
  );
}



export default Navbar
