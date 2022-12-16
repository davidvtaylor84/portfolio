import React from 'react'
import NavLinks from './NavLinks'
import './NavBar.css'
import {HiMenu} from 'react-icons/hi'
import {GrClose} from 'react-icons/gr'
import { useState } from 'react';

const MobileNavigation = () => {

    const [menu, setMenu] = useState(false)

    const hamburgerIcon = <HiMenu className='hamburger' size='40px' color='white'
    onClick={()=> setMenu(!menu)}/>

    const closeIcon = <GrClose className='hamburger' size='40px' color='white'
    onClick={()=> setMenu(!menu)}/>

    const closeMobile = () => setMenu(false)

  return (
    <nav className='MobileNavigation'>
        {menu ? closeIcon :  hamburgerIcon}
        {menu && <NavLinks isMobile={true} closeMobile={closeMobile}/>}
    </nav>
  )
}

export default MobileNavigation