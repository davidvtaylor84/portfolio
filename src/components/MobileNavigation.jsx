import React from 'react'
import NavLinks from './NavLinks'
import './NavBar.css'
import {HiMenu} from 'react-icons/hi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useState } from 'react';

const MobileNavigation = () => {

    const [menu, setMenu] = useState(false)

    const hamburgerIcon = <HiMenu className='hamburger' size='40px' color='blanchedalmond'
    onClick={()=> setMenu(!menu)}/>

    const closeIcon = <AiOutlineCloseCircle className='hamburger' size='35px' color='blanchedalmond'
    onClick={()=> setMenu(!menu)}/>

    const closeMobile = () => setMenu(false)

  return (
    <div className='mobilebackground'>
    <nav className='MobileNavigation'>
        {menu ? closeIcon :  hamburgerIcon}
        {menu && <NavLinks isMobile={true} closeMobile={closeMobile}/>}
    </nav>
    </div>
  )
}

export default MobileNavigation