import React from 'react'
import {Link} from "react-router-dom"
import './NavBar.css'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'


const NavBar = () => {
  return (
    <div className="Nav">
      <MobileNavigation className='MobileNav'/>
      <Navigation className='Navigation'/>
    </div>
  )
}

export default NavBar