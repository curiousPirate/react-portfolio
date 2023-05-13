import { Carousel, Button } from "@material-tailwind/react";
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

export default function About() {
  return (
    <Carousel className="bg-[#001129]">
       {projectsData.map((project) => (
            <motion.div
              className="p-4 w-full"
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="bg-sky-900 shadow-lg rounded-lg overflow-hidden"
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

      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="img"
          className="h-full w-full object-contain"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <p
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </p>
            <p
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </p>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>

    </Carousel>
  );
}
