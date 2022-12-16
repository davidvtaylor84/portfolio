import React from 'react'
import {Link} from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="NavBar">
    <div>
    <ul>
      <li className="navlist">
        <Link to="/" className="nav_links">Home</Link>
      </li>
      <li className="navlist">
        <Link to="/about" className="nav_links">About</Link>
      </li>
      <li className="navlist">
        <Link to="/myprojects" className="nav_links">Projects</Link>
      </li>
      {/* <li className="navlist">
        <Link to="/sideprojects" className="nav_links">Side Projects</Link>
      </li> */}
      <li className="navlist">
        <Link to="/portfolio/contact" className="nav_links">Contact</Link>
      </li>
    </ul>
    </div>
  </nav>
  )
}

export default NavBar