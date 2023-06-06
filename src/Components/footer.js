import React from "react";
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

  return (
    <footer
      className="fixed bottom-0 bg-[#8d286f] opacity-80 py-3 w-full"
      style={{ zIndex: "200" }}
    >
      <div className="flex space-x-4 justify-around items-center">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <FontAwesomeIcon
            icon={faHouse}
            size="2xl"
            style={{ color: location.pathname === "/" ? "#37d7bd" : "" }}
          />
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          <FontAwesomeIcon
            icon={faUserTie}
            size="2xl"
            style={{ color: location.pathname === "/about" ? "#37d7bd" : "" }}
          />
        </Link>
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "active" : ""}
        >
          <FontAwesomeIcon
            icon={faLaptopCode}
            size="2xl"
            style={{
              color: location.pathname === "/projects" ? "#37d7bd" : "",
            }}
          />
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2xl"
            style={{ color: location.pathname === "/contact" ? "#37d7bd" : "" }}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
