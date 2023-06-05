import { Carousel, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Let's Go Party!",
    description:
      "Many people struggle to find the best events and restaurants in their area or when they travel to new places. Let's Go Party addresses this problem by providing a comprehensive database of events and restaurants, and powerful search filters that make it easy to find exactly what you're looking for. The application is built using React and utilizes the tailwind CSS framework, ensuring a visually appealing and responsive user interface. Let's Go Party makes it easy to find the hottest food events, raves, concerts, clubs, and more.",
    futureDevelopment:
      "Let's Go Party has exciting plans for future development to enhance the user experience and make the platform more social and interactive. One key feature in the pipeline is the addition of a Share button, allowing users to effortlessly share their favorite events or recommended restaurants with friends through various social media platforms. This sharing capability will enable users to spread the word about exciting events and dining experiences, fostering a sense of community and engagement. Another planned feature is the introduction of a chat functionality within the application. This chat feature will enable users to connect and communicate with their friends or other event attendees, facilitating coordination and enhancing the overall experience of attending events together. Users will be able to discuss event details, make plans, and share their excitement, fostering a vibrant social environment within Let's Go Party.Furthermore, Let's Go Party aims to expand its database by incorporating more niche or lesser-known events and restaurants. By including a diverse range of options, the platform will cater to different preferences and provide users with unique and undiscovered experiences. This expansion will ensure that Let's Go Party remains a comprehensive and valuable resource for individuals seeking memorable and enjoyable events and dining opportunities.",
    skills: "React, Tailwind, Node.JS, SerpApi, email.JS, Netlify.",
    image: require("../design/letsgoparty.png"),
    projectLink: "https://letsgoparty.netlify.app/",
    repoLink: "https://github.com/curiousPirate/letsgoparty",
  },

  {
    id: 2,
    title: "Movie Mate",
    description:
      "Movie Mate is an all-in-one platform that allows users to stay updated with the latest movies and shows. With its beautiful UI/UX design, Movie Mate provides a seamless experience for users to search for movies, access movie details, watch trailers, and explore IMDb links. Each movie card in Movie Mate displays comprehensive movie details, including the title, release date, ratings, and a brief overview. Users can easily navigate through the movie collection and find relevant information about their favorite films. The IMDb search engine integrated into Movie Mate enables users to search and access detailed information about movies, including cast members, crew, reviews, and more. This feature enhances the overall movie discovery experience and provides users with comprehensive insights into their favorite films.",
    futureDevelopment:
      "In the future, Movie Mate can incorporate streaming details for movies, allowing users to easily find out where they can stream or watch a particular movie. This feature will provide convenience and save users' time by eliminating the need to search for streaming platforms separately. Movie Mate can expand its offerings by including TV shows alongside movies. Users will have access to a wide range of TV shows, enabling them to explore and discover new series. This addition will make Movie Mate a comprehensive platform for both movies and TV show enthusiasts.",
    skills:
      "Vanilla Java Script, Tailwind, TMDB-API, IMDb-API, API-Ninja, Netlify.",
    image: require("../project-design/movie-mate.png"),
    projectLink: "https://moviemateforever.netlify.app/",
    repoLink: "https://github.com/curiousPirate/MovieMate",
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
          <div className="px-6 pb-20">
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
                Technologies &amp; API's:
              </span>
              <span className="block m-4 text-left">{project.skills}</span>
            </div>
            <div className="flex lg:flex-row flex-col">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8d286f] m-4 text-white px-4 flex items-center py-2 rounded-md hover:bg-teal-500 mr-2 text-sm"
              >
                Live Site
                <svg
                  className="h- w-5 mx-2"
                  fill="currentColor"
                  style={{ color: "#fffff" }}
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <circle
                    cx="128"
                    cy="128"
                    r="96"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit="10"
                    strokeWidth="16"
                  ></circle>
                  <line
                    x1="37.467"
                    x2="218.532"
                    y1="96"
                    y2="96"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                  <line
                    x1="37.471"
                    x2="218.534"
                    y1="160"
                    y2="160"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                  <ellipse
                    cx="128"
                    cy="128"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit="10"
                    strokeWidth="16"
                    rx="40"
                    ry="93.423"
                  ></ellipse>
                </svg>
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 m-4 text-white px-4 flex items-center py-2 rounded-md hover:bg-[#8d286f] mr-2 text-sm"
              >
                View Code
                <svg
                  className="h- w-5 mx-2"
                  fill="currentColor"
                  style={{ color: "#fffff" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
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
