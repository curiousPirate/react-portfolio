import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Typed from "typed.js";
import { ReactComponent as Svg } from "../design/new.svg";
import SatelliteMotion from "./satellitemotion";


const Home = () => {


useEffect(() => { 
  // eslint-disable-next-line no-unused-vars
  var typed = new Typed(".auto-type", 
  { strings: [ "React Front-End Developer, Designer, Project Management, Customer Success.", ], 
  typeSpeed: 40, 
  backSpeed: 0,
});

}, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ flex: 1 }}>
        <img
          src={require("../design/chaitanya.png")}
          className="w-full h-full object-contain"
          alt="chaitanya"
        />
      </div>
      <div style={{ flex: 1, position: "relative" }}>
        <Svg
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
        <SatelliteMotion />
        <div className="py-5 absolute">
          <h1 className="text-4xl font-bold">Hello! I'm Chaitanya,</h1>
          <h2 className="text-xl m-4 relative">
            Expertise in: <br />
            <span className="auto-type"></span>
          </h2>
          <Link
            to="/projects"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Launch portfolio
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
