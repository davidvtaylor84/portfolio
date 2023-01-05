import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="socialLinks">
      <a href="https://www.linkedin.com/in/davidvtaylor184/">
        <FontAwesomeIcon icon={faLinkedin} className="linkedIn" />
      </a>
      <a href="https://github.com/davidvtaylor84"><FontAwesomeIcon icon={faGithub} className="github" /></a>
    </div>
  );
};

export default SocialLinks;
