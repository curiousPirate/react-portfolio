import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserTie,
  faLaptopCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <footer
      className="bg-[#8d286f] bg-opacity-60 backdrop-blur-sm footer-list"
      style={{ zIndex: "200" }}
    >
      <ul>
        <li className={`list ${activeItem === "/" ? "active" : ""}`}>
          <Link to="/" onClick={handleClick}>
            <span className="icon">
              <FontAwesomeIcon title="Home" icon={faHouse} size="xl" />
            </span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li className={`list ${activeItem === "/about" ? "active" : ""}`}>
          <Link to="/about" onClick={handleClick}>
            <span className="icon">
              <FontAwesomeIcon title="About" icon={faUserTie} size="xl" />
            </span>
            <span className="text">About</span>
          </Link>
        </li>
        <li className={`list ${activeItem === "/projects" ? "active" : ""}`}>
          <Link to="/projects" onClick={handleClick}>
            <span className="icon">
              <FontAwesomeIcon title="Projects" icon={faLaptopCode} size="xl" />
            </span>
            <span className="text">Projects</span>
          </Link>
        </li>
        <li className={`list ${activeItem === "/contact" ? "active" : ""}`}>
          <Link to="/contact" onClick={handleClick}>
            <span className="icon">
              <FontAwesomeIcon title="Contact" icon={faEnvelope} size="xl" />
            </span>
            <span className="text">Contact</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </footer>
  );
};

export default Footer;
