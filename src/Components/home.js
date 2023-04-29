import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { ReactComponent as Svg } from "../design/bg.svg";


const Home = () => {

        useEffect(() => { 
          // eslint-disable-next-line no-unused-vars
          var typed = new Typed(".auto-type", 
          { strings: [ "React Front-End Development, Designing, Agile Project Management Customer Success.", ], 
          typeSpeed: 30, 
          backSpeed: 0,
        });

        }, []);


  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 flex flex-col px-8 bg-[#001129] text-teal-500 ">
        <h1 className="text-4xl font-bold mt-40 lg:mt-30">
          Hello! I'm Chaitanya,
        </h1>
        <h2 className="text-xl py-4 h-12">
          Expertise in: <br />
          <span className="auto-type"></span>
        </h2>
        <Link
          to="/projects"
          className="relative inline-block px-2 py-2 font-medium group mt-20"
          style={{ zIndex: "20" }}
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-teal-500 border-2 border-black group-hover:bg-black"></span>
          <span className="flex relative justify-center text-white  group-hover:text-white">
            &lt;GET STARTED /&gt;
          </span>
        </Link>
      </div>
      <div className="md:w-1/2">
        <img
          src={require("../design/chaitanya.jpg")}
          className="object-contain w-full h-full"
          alt="chaitanya"
        />
        <Svg className="absolute top-0 left-200" style={{ zIndex: "10" }} />
      </div>
    </div>
  );
};

export default Home;
