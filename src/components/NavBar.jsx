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
        <Link to="/about" className="nav_links">About Me</Link>
      </li>
      <li className="navlist">
        <Link to="/myprojects" className="nav_links">My Projects</Link>
      </li>
      {/* <li className="navlist">
        <Link to="/portfolio/python" className="nav_links">Python</Link>
      </li>
      <li className="navlist">
        <Link to="/portfolio/javascript" className="nav_links">JavaScript</Link>
      </li>
      <li className="navlist">
        <Link to="/portfolio/java" className="nav_links">Java</Link>
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