import React, { useEffect } from "react";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    var typed = new Typed(".auto-type", {
      strings: [
        "Designer.",
        "Front-End Developer.",
        "MERN Stack.",
        "Project Management.",
        "Customer Success.",
      ],
      typeSpeed: 10,
      backspeed: 10,
      loop: true,
    });
  }, []);

  return (
    <div className="px-4 py-5 text-center">
      <img
        src={require("../design/logo.png")}
        className="w-18.08 h-20 items-center"
        alt="logo"
      />
      <div className="py-5">
        <h1 className="text-5xl font-bold">Hello! I'm Chaitanya,</h1>
        <div className="lg:col-span-6 mx-auto">
          <p className="text-xl font-bold mb-4">
            <h1>
              Expertise in: <br />
              <span className="auto-type"></span>
            </h1>
          </p>
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 justify-center">
            <button
              type="button"
              className="btn btn-outline-info btn-lg px-4 me-sm-3 font-bold"
              id="contact-me"
            >
              GET IN TOUCH!
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              href="#projects"
            >
              PROJECTS
            </button>
            <a
              href="#_"
              class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Button Text
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
