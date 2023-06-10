import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Smiles from "../design/smile-svg/smilesvg";
import Aboutsvg from "../design/about-svg/aboutsvg";

const About = () => {
  return (
    <div className="flex place-content-center bg-[#001129]">
      {/* <Smiles /> */}
      <Aboutsvg />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-justify"
        style={{ width: "75%", maxWidth: "50rem" }}
      >
        <p className="m-20 text-3xl md:text-4xl lg:text-5xl text-teal-600 text-center">
          A Little About Me
        </p>
        <hr className="p-6"></hr>
        <p className="mb-12 text-lg text-white">
          I'm a chemical engineering graduate with a strong passion for
          relationship building and management. With a 5+ years of experience in
          project management and customer success, I discovered my innate
          ability to connect with people and drive successful outcomes. However,
          my journey took an exciting turn when I discovered my passion for
          design and creating visually pleasing websites.
        </p>
        <hr className="p-6"></hr>
        <p className="mb-12 text-lg text-white">
          Curiosity has been the driving force behind my career transition. I am
          constantly seeking knowledge and exploring new technologies,
          frameworks, and coding practices. The ever-evolving nature of the tech
          industry excites me, as it provides endless opportunities for growth
          and learning. With each project, I embrace challenges and push myself
          to think creatively, allowing curiosity to fuel my problem-solving
          approach.
        </p>
        <hr className="p-6"></hr>
        <p className="mb-12 text-lg text-white">
          Combining my background in relationship building, project management,
          and my newfound passion for coding, I strive to create meaningful and
          user-centric web experiences. My goal is to blend aesthetics with
          functionality, ensuring that every website I create not only looks
          visually appealing but also delivers a seamless and intuitive user
          experience.
        </p>
        <hr className="p-6"></hr>
        <p className="mb-12 text-lg text-white">
          Have a look at the projects that I have worked with and you can find
          my resume a click away if you feel more curious about my previous
          work!
        </p>
        <hr className="p-6"></hr>
        <div className="flex justify-center gap-6 mb-20">
          <a
            href={require("../design/Resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-2 py-2 font-medium group"
            style={{ zIndex: "20" }}
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-teal-600 border-2 border-black group-hover:bg-black"></span>
            <span className="flex relative justify-center text-white group-hover:text-white">
              &lt;RESUME /&gt;
            </span>
          </a>
          <Link
            to="/projects"
            className="relative inline-block px-2 py-2 font-medium group"
            style={{ zIndex: "20" }}
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-teal-600 border-2 border-black group-hover:bg-black"></span>
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
