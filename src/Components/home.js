import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import SatelliteMotion from "./satellitemotion";
// import { ReactComponent as Svg } from "../design/new.svg";


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
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-wrap justify-center flex-col p-8 bg-[#102a43] text-teal-500 ">
        <h1 className="text-4xl font-bold">Hello! I'm Chaitanya,</h1>
        <h2 className="text-xl py-4">
          Expertise in: <br />
          <span className="auto-type"></span>
        </h2>
        <Link
          to="/projects"
          className="relative inline-block px-2 py-2 font-medium group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-teal-500 border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-white  group-hover:text-white">
            Get Started!
          </span>
        </Link>
      </div>
      <div className="md:w-1/2">
        <img
          src={require("../design/chaitanya.jpg")}
          className="object-contain w-full h-full"
          alt="chaitanya"
        />
        <SatelliteMotion />
      </div>
    </div>
  );
};

export default Home;

    // <div className="w-full flex justify-center items-center">
    //   <div className="flex-initial">
    //     <div className="py-5">
    //       <h1 className="text-4xl font-bold">Hello! I'm Chaitanya,</h1>
    //       <h2 className="text-xl m-4 relative">
    //         Expertise in: <br />
    //         <span className="auto-type"></span>
    //       </h2>
    //       <Link
    //         to="/projects"
    //         className="relative inline-block px-4 py-2 font-medium group"
    //       >
    //         <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    //         <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
    //         <span className="relative text-black group-hover:text-white">
    //           Launch portfolio
    //         </span>
    //       </Link>
    //     </div>
    //     <div className="flex flex-wrap">
    //       <div>
    //         <img
    //           src={require("../design/chaitanya.png")}
    //           className="object-contain w-full h-full"
    //           alt="chaitanya"
    //         />
    //         <SatelliteMotion />
    //         <div className="w-full lg:w-2/5" style={{ display: "flex" }}>
    //           <Svg
    //             style={{
    //               width: "100%",
    //               height: "100%",
    //               position: "absolute",
    //             }}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>