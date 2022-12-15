import React from 'react'
import {Link} from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="NavBar">
    <div>
    <ul>
      <li className="navlist">
        <Link to="/portfolio" className="nav_links">Home</Link>
      </li>
      <li className="navlist">
        <Link to="/portfolio/python" className="nav_links">Python</Link>
      </li>
      <li className="navlist">
        <Link to="/portfolio/javascript" className="nav_links">JavaScript</Link>
      </li>
      <li className="navlist">
        <Link to="/portfolio/java" className="nav_links">Java</Link>
      </li>
      <li className="navlist">
<<<<<<< HEAD
        <Link to="/portfolio/cv" className="nav_links">Contact</Link>
=======
        <Link to="/portfolio/contact" className="nav_links">Contact</Link>
>>>>>>> e586a8fab094234c51203b5d62106647330949ac
      </li>
    </ul>
    </div>
  </nav>
  )
}

export default NavBar