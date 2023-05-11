import React from "react";
import { motion } from "framer-motion";


const projectsData = [
{
  id: 1,

  title: "Let's Go Party!",

  description: "Let's Go Party is a React web application that makes it easy for users to discover and plan for events and restaurants in their area or when they travel to new places. With powerful search filters and a user-friendly interface, Let's Go Party makes it easy to find the hottest food events, raves, concerts, clubs, and more.",

  userStory: "As a traveler or local, you want to be able to easily find the best events and restaurants in your area or a new city so that you can plan the perfect weekend or night out. Let's Go Party provides you with all the information you need to discover the hottest events and the best restaurants enjoyed by the locals.",

  whyRequired: "Many people struggle to find the best events and restaurants in their area or when they travel to new places. Let's Go Party addresses this problem by providing a comprehensive database of events and restaurants, and powerful search filters that make it easy to find exactly what you're looking for.",

  challenges: "While developing Let's Go Party, we faced a number of technical challenges. One of the biggest was the CORS issue, which prevented the web application from accessing data from a different domain. To overcome this issue, we used Express.js as a proxy to make requests to the API from the server-side instead of the client-side. This allowed us to bypass the CORS issue and retrieve the data needed for the application. Another challenge we faced was with saved events not auto-updating. To solve this issue, we created a setTimeout function that periodically checked the local storage for changes in saved events and updated the UI accordingly.",

  designIssues: "In terms of design, our main challenge was to create a user interface that was simple and intuitive while also providing enough detail to help users make informed decisions about which events or restaurants to attend. We overcame this challenge by incorporating a clean and modern design, with a simple search bar, filter options, and clear calls-to-action such as the Save and Subscribe buttons.",

  futureDevelopment: "As for future development, we plan to make Let's Go Party a more social platform by adding a Share button that allows users to easily share events or restaurants with friends. We also plan to introduce a chat feature that will allow users to communicate and coordinate with their friends or other attendees of the events. Additionally, we aim to expand our database and incorporate more niche or lesser-known events and restaurants to provide even more value to our users.",

  skills: "React, JavaScript, CSS",
  image: require("../project-design/letsparty.png"),
  projectLink: "https://project1.com",
  repoLink: "https://github.com/project1",
},

  {
    id: 2,
    title: "Movie Mate",
    description:
      "One place to stay updated with latest movies, shows and never miss out the movies experience near you! Get personalised results based on your location to know",
    skills: "Python, Django, HTML, CSS",
    image: require("../project-design/movie-mate.png"),
    projectLink: "https://project2.com",
    repoLink: "https://github.com/project2",
  },
  {
    id: 3,
    title: "JS Quiz",
    description: "This is project 2.",
    skills: "Python, Django, HTML, CSS",
    image: require("../project-design/quizgame.png"),
    projectLink: "https://project2.com",
    repoLink: "https://github.com/project2",
  },
  {
    id: 4,
    title: "Password Generator",
    description: "This is project 2.",
    skills: "Python, Django, HTML, CSS",
    image: require("../project-design/password-generator.png"),
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
                <div className="screen">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="py-4 px-6">
                  <h2 className="text-lg font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-700 text-base">
                    Introduction: {project.description}
                    {project.userStory}
                    {project.whyRequired}
                    {project.challenges}
                    {project.designIssues}
                    {project.futureDevelopment}
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
