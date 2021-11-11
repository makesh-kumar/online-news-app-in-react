import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaMobileAlt,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="text-content">Follow Me</div>
      <div className="icons-list">
        <a
          href="https://www.linkedin.com/in/makesh-kumar/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaLinkedinIn className="icon-btn" color="white" />
        </a>
        <a
          href="https://github.com/makesh-kumar/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaGithub className="icon-btn" color="white" />
        </a>

        <a
          href="tel:+919095774441"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaMobileAlt className="icon-btn" color="white" />
        </a>
        <a
          href="mailto:mynameismakesh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <AiOutlineMail className="icon-btn" color="white" />
        </a>

        <a
          href="https://twitter.com/this_is_makesh"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaTwitter className="icon-btn" color="white" />
        </a>

        <a
          href="https://www.facebook.com/makesh.thedon"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaFacebookF className="icon-btn" color="white" height="25px" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=9095774441"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaWhatsapp className="icon-btn" color="white" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
