import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex justify-center h-screen bg-[#001129]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-justify"
        style={{ width: "75%", maxWidth: "50rem" }}
      >
        <p className="m-20 text-3xl md:text-4xl lg:text-5xl text-white text-center">
          A Little About Me
        </p>
        <p className="mb-12 text-lg opacity-80 text-white">
          I'm a chemical engineering graduate with a strong passion for
          relationship building and management. Throughout my career in project
          management and customer success, I discovered my innate ability to
          connect with people and drive successful outcomes. However, my journey
          took an exciting turn when I discovered my passion for design and
          creating visually pleasing websites. This newfound interest sparked a
          high level of enthusiasm for coding and continuously improving my
          technical skills.
        </p>
        <div className="flex justify-center gap-2">
          <Link
            to="/projects"
            className="relative inline-block px-2 py-2 font-medium group"
            style={{ zIndex: "20" }}
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-teal-500 border-2 border-black group-hover:bg-black"></span>
            <span className="flex relative justify-center text-white group-hover:text-white">
              &lt;PROJECTS /&gt;
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
