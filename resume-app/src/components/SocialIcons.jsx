import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaMailchimp,
  FaMailBulk,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/generalStyles.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/in/asy1921/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Asy1921"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaGithub />
      </a>
      <a
        href="https://leetcode.com/Asy1921"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaCode />
      </a>
      <a href="mailto:amitabh.suyash@gmail.com" className="social-icon">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialIcons;
