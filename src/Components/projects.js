import React from "react";
import { motion } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "Let's go party!",
    description:
      "While traveling to a new place, it shouldn't be hard to find what the city has to offer, introducing this application to find the hottest food events, raves, concerts and much more anywhere in the world",
    skills: "React, JavaScript, CSS",
    image: require("../project-design/letsparty.png"),
    projectLink: "https://project1.com",
    repoLink: "https://github.com/project1",
  },
  {
    id: 2,
    title: "Movie Mate",
    description: "One place to stay updated with latest movies, shows and never miss out the movies experience near you! Get personalised results based on your location to know",
    skills: "Python, Django, HTML, CSS",
    image: "/project2.jpg",
    projectLink: "https://project2.com",
    repoLink: "https://github.com/project2",
  },
  {
    id: 3,
    title: "Project 2",
    description: "This is project 2.",
    skills: "Python, Django, HTML, CSS",
    image: "/project2.jpg",
    projectLink: "https://project2.com",
    repoLink: "https://github.com/project2",
  },
  {
    id: 4,
    title: "Project 2",
    description: "This is project 2.",
    skills: "Python, Django, HTML, CSS",
    image: "/project2.jpg",
    projectLink: "https://project2.com",
    repoLink: "https://github.com/project2",
  },
];

function Projects() {
  return (
    <div className="bg-[#001129]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-teal-500 sm:text-4xl pt-10">
            &lt; PROJECTS &gt;
          </h2>
        </div>
        <motion.div
          className="mt-10 -mx-4 flex flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {projectsData.map((project) => (
            <motion.div
              className="p-4 w-full"
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="bg-white shadow-lg rounded-lg overflow-hidden"
                whileHover={{ y: -10 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="py-4 px-6">
                  <h2 className="text-lg font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-700 text-base">
                    {project.description}
                  </p>
                  <div className="flex justify-between mt-4">
                    <div>
                      <h4 className="text-gray-500">
                        Skills &amp; Technologies:
                      </h4>
                      <p>{project.skills}</p>
                    </div>
                    <div className="flex">
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-2"
                      >
                        View Project
                      </a>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
