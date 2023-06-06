import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Intro } from "../design/intro.svg";

const About = () => {
  return (
    <div className="relative h-full w-full">
      <Intro className="fixed top-0 left-200" style={{ zIndex: 0 }} />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4 text-center md:w-2/4">
          <p
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            A little about me...
          </p>
          <p variant="lead" color="white" className="mb-12 opacity-80"></p>
          <div className="flex justify-center gap-2">
            <Link
              to="/projects"
              className="relative inline-block px-2 py-2 mt-32 font-medium group"
              style={{ zIndex: "20" }}
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-teal-500 border-2 border-black group-hover:bg-black"></span>
              <span className="flex relative justify-center text-white  group-hover:text-white">
                &lt;PROJECTS /&gt;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;