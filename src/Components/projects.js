import { Carousel, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Let's Go Party!",
    description:
      "Many people struggle to find the best events and restaurants in their area or when they travel to new places. Let's Go Party addresses this problem by providing a comprehensive database of events and restaurants, and powerful search filters that make it easy to find exactly what you're looking for. Let's Go Party is a React web application using tailwind and with powerful search filters and a user-friendly interface, Let's Go Party makes it easy to find the hottest food events, raves, concerts, clubs, and more.",
    futureDevelopment:
      "As for future development, we plan to make Let's Go Party a more social platform by adding a Share button that allows users to easily share events or restaurants with friends. We also plan to introduce a chat feature that will allow users to communicate and coordinate with their friends or other attendees of the events. Additionally, we aim to expand our database and incorporate more niche or lesser-known events and restaurants to provide even more value to our users.",
    skills: "React, Tailwind, Node.JS, SerpApi, email.JS.",
    image: require("../design/letsgoparty.png"),
    projectLink: "https://letsgoparty.netlify.app/",
    repoLink: "https://github.com/curiousPirate/letsgoparty",
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
    title: "Mini Projects",
    description: "This is project 2.",
    skills: "Python, Django, HTML, CSS",
    image: require("../project-design/mini-projects.png"),
    projectLink: "https://project2.com",
    repoLink: "https://github.com/project2",
  },
];

export default function About() {
  return (
    <Carousel className=" bg-[#001129]">
      {projectsData.map((project) => (
        <motion.div className="p-4 w-full" key={project.id}>
          <h1 className="text-center text-4xl text-teal-500 py-5">
            &lt; PROJECTS &gt;
          </h1>
          <motion.div
            className="bg-sky-900 shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="screen">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>
          <div className="py-4 pb-28 px-6">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-4 md:py-8 font-bold"
            >
              <span className="text-4xl md:text-6xl text-[#8d286f] first-letter:text-7xl inline-block">
                {project.title}
              </span>
            </a>
            <div className="text-base md:text-lg text-teal-500 text-justify">
              <span className="block mt-4 mx-4 text-3xl font-bold first-letter:text-[#8d286f] underline">
                Introduction:
              </span>
              <span className="block m-4 first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
                {project.description}
              </span>
              <span className="block mt-4 mx-4 text-3xl font-bold first-letter:text-[#8d286f] underline">
                Future Development:
              </span>
              <span className="block m-4 first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
                {project.futureDevelopment}
              </span>
              <span className="block mt-4 mx-4 text-3xl font-bold first-letter:text-[#8d286f] underline text-left">
                Skills &amp; Technologies:
              </span>
              <span className="block m-4 text-left">{project.skills}</span>
            </div>
            <div className="flex">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8d286f] m-4 text-white px-4 py-2 rounded-md hover:bg-teal-500 mr-2 text-sm"
              >
                Live Site
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 m-4 text-white px-4 py-2 rounded-md hover:bg-[#8d286f] text-sm"
              >
                View Code
              </a>
            </div>
          </div>
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
            <p variant="lead" color="white" className="mb-12 opacity-80">
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
