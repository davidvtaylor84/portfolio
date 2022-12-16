import React from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: -0 };

  return (
    <ul>
      <motion.li
        inital={animateFrom}
        animate={animateTo}
        transition={{delay:0.05}}
        className="navlist"
        onClick={() => props.isMobile && props.closeMobile()}
      >
        <Link to="/" className="nav_links">
          Home
        </Link>
      </motion.li>
      <motion.li
        inital={animateFrom}
        animate={animateTo}
        transition={{delay:0.10}}
        className="navlist"
        onClick={() => props.isMobile && props.closeMobile()}
      >
        <Link to="/about" className="nav_links">
          About
        </Link>
      </motion.li>
      <motion.li
        inital={animateFrom}
        animate={animateTo}
        transition={{delay:0.20}}
        className="navlist"
        onClick={() => props.isMobile && props.closeMobile()}
      >
        <Link to="/myprojects" className="nav_links">
          Projects
        </Link>
      </motion.li>
      {/* <li className="navlist">
        <Link to="/sideprojects" className="nav_links">Side Projects</Link>
      </li> */}
      <motion.li
        inital={animateFrom}
        animate={animateTo}
        transition={{delay:0.30}}
        className="navlist"
        onClick={() => props.isMobile && props.closeMobile()}
      >
        <Link to="/portfolio/contact" className="nav_links">
          Contact
        </Link>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
