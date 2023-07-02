import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Aboutsvg from "../design/about-svg/aboutsvg";


const About = () => {
  
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex place-content-center bg-[#001129]">
      <Aboutsvg />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-justify"
        style={{ width: "85%", maxWidth: "100%" }}
      >
        <p className="flex justify-center items-center my-10 p-10 text-3xl md:text-4xl lg:text-5xl text-white underline bg-sky-600 backdrop-filter backdrop-blur-sm border-solid rounded-xl">
          The Journey
        </p>
        <hr className="p-6"></hr>
        <p className="mb-12 text-lg lg:p-10 p-4 text-white bg-sky-600 backdrop-filter backdrop-blur-sm border-solid rounded-xl">
          First impressions matter, even in the digital world. A website is like
          a book cover that reflects the essence of a product or company. With a
          deep understanding of this importance, I embarked on a journey as a
          frontend developer and designer.
        </p>
        <hr className="p-6"></hr>
        <p className="mb-12 text-lg lg:p-10 p-4 text-white bg-sky-600 backdrop-filter backdrop-blur-sm border-solid rounded-xl">
          With over 5 years of experience, I bring a unique perspective as a
          chemical engineering graduate. During my studies, I discovered my
          innate skills as a people person through organizing various events.
        </p>
        <hr className="p-6"></hr>
        <p className="mb-12 text-lg lg:p-10 p-4 text-white bg-sky-600 backdrop-filter backdrop-blur-sm border-solid rounded-xl">
          My professional career started as a project engineer in the oil and
          gas industry at My Eco Energy, where I quickly transitioned into
          customer success and project management roles. Working on
          groundbreaking projects like the smart city and safe city initiatives
          in Bengaluru at Matrix Security & Surveillance, I handled complex
          networks with over 10,000 cameras and managed the dial 100 emergency
          response system. Later I joined Xavvy in the UK, where I worked as a
          customer success and Magento developer. During my tenure, I played a
          crucial role in building an e-commerce project for Total Tiles.
        </p>
        <hr className="p-6"></hr>
        <p className="mb-12 text-lg lg:p-10 p-4 text-white bg-sky-600 backdrop-filter backdrop-blur-sm border-solid rounded-xl">
          Seeking further professional growth, I completed a bootcamp on React
          frontend development offered by edX UK. Through this program, I gained
          hands-on experience in developing projects such as finding events
          around you and a movie database platform. Additionally, I had the
          opportunity to work on a food delivery application, honing my skills
          in creating intuitive and seamless user experiences."
        </p>
        <hr className="p-6"></hr>
        <p className="mb-12 text-lg lg:p-10 p-4 text-white bg-sky-600 backdrop-filter backdrop-blur-sm border-solid rounded-xl">
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
            onClick={handleClick}
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
