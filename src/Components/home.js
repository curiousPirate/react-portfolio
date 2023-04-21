import { Link } from "react-router-dom";
import { useEffect } from "react";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed(".auto-type", {
      strings: [
        "React Front-End Developer, Designer, Project Management, Customer Success.",
      ],
      typeSpeed: 40,
      backSpeed: 0,
    });
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat m-0 overflow-hidden text-center mt-20"
      style={{
        backgroundImage: `url(${require("../design/triangles.avif")})`,
      }}
    >
      <div className="mt-20">
        <img
          src={require("../design/Chaitanya.jpeg")}
          className="rounded-full object-cover w-60 h-80 mx-auto filter drop-shadow-lg"
          alt="logo"
        />
      </div>
      <div className="py-5">
        <h1 className="text-4xl font-bold">Hello! I'm Chaitanya,</h1>
        <h1 className="text-xl mb-4">
          Expertise in: <br />
          <span className="auto-type"></span>
        </h1>
        <span className="my-4 mx-4">
          <Link
            to="/contact"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Hire Me!
            </span>
          </Link>
        </span>
        <span className="my-4 mx-4">
          <Link
            to="/projects"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Projects
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
