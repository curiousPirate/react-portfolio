import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "LET'S GO PARTY!",
    description:
      "Many people struggle to find the best events and restaurants in their area or when they travel to new places. Let's Go Party addresses this problem by providing a comprehensive database of events and restaurants, and powerful search filters that make it easy to find exactly what you're looking for. The application is built using React and utilizes the tailwind CSS framework, ensuring a visually appealing and responsive user interface. Let's Go Party makes it easy to find the hottest food events, raves, concerts, clubs, and more.",
    futureDevelopment:
      "Let's Go Party has exciting plans for future development to enhance the user experience and make the platform more social and interactive. One key feature in the pipeline is the addition of a Share button, allowing users to effortlessly share their favorite events or recommended restaurants with friends through various social media platforms. This sharing capability will enable users to spread the word about exciting events and dining experiences, fostering a sense of community and engagement. Another planned feature is the introduction of a chat functionality within the application. This chat feature will enable users to connect and communicate with their friends or other event attendees, facilitating coordination and enhancing the overall experience of attending events together. Users will be able to discuss event details, make plans, and share their excitement, fostering a vibrant social environment within Let's Go Party.Furthermore, Let's Go Party aims to expand its database by incorporating more niche or lesser-known events and restaurants. By including a diverse range of options, the platform will cater to different preferences and provide users with unique and undiscovered experiences. This expansion will ensure that Let's Go Party remains a comprehensive and valuable resource for individuals seeking memorable and enjoyable events and dining opportunities.",
    skills: "React, Tailwind, Node.JS, SerpApi, email.JS, Netlify.",
    image: require("../project-design/lets-go-party.jpg"),
    projectLink: "https://letsgoparty.netlify.app/",
    repoLink: "https://github.com/curiousPirate/letsgoparty",
  },

  {
    id: 2,
    title: "MOVIE MATE",
    description:
      "Movie Mate is an all-in-one platform that allows users to stay updated with the latest movies and shows. With its beautiful UI/UX design, Movie Mate provides a seamless experience for users to search for movies, access movie details, watch trailers, and explore IMDb links. Each movie card in Movie Mate displays comprehensive movie details, including the title, release date, ratings, and a brief overview. Users can easily navigate through the movie collection and find relevant information about their favorite films. The IMDb search engine integrated into Movie Mate enables users to search and access detailed information about movies, including cast members, crew, reviews, and more. This feature enhances the overall movie discovery experience and provides users with comprehensive insights into their favorite films.",
    futureDevelopment:
      "In the future, Movie Mate can incorporate streaming details for movies, allowing users to easily find out where they can stream or watch a particular movie. This feature will provide convenience and save users' time by eliminating the need to search for streaming platforms separately. Movie Mate can expand its offerings by including TV shows alongside movies. Users will have access to a wide range of TV shows, enabling them to explore and discover new series. This addition will make Movie Mate a comprehensive platform for both movies and TV show enthusiasts.",
    skills:
      "Vanilla Java Script, Tailwind, TMDB-API, IMDb-API, API-Ninja, Netlify.",
    image: require("../project-design/movie-mate.webp"),
    projectLink: "https://moviemateforever.netlify.app/",
    repoLink: "https://github.com/curiousPirate/MovieMate",
  },
  {
    id: 3,
    title: "JS Quiz",
    description:
      "Introducing JS Quiz Master, an interactive JavaScript quiz application designed to sharpen your skills and test your knowledge of JavaScript concepts. With a dynamic scoring system that rewards quick thinking, you'll feel the adrenaline rush as you race against the clock to answer questions accurately. The application keeps track of your performance, assigning points based on the time left after answering each question. Challenge yourself to beat your previous scores and climb to the top of the leaderboard. Your accomplishments are showcased with pride, as your initials and scores are securely saved and displayed using local storage. JS Quiz Master provides an engaging and immersive learning experience, allowing you to reinforce your JavaScript expertise while enjoying the thrill of competition. Are you ready to put your JavaScript knowledge to the ultimate test? Get started now and see how high you can score!",
    skills: "Vanilla Java Script",
    image: require("../project-design/js-quiz.webp"),
    projectLink: "https://curiouspirate.github.io/quiz-game/",
    repoLink: "https://github.com/curiousPirate/quiz-game",
  },
];

export default function Project() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <div className="bg-[#001129] p-4 mb-28">
      <h1 className="flex justify-center items-center my-10 p-10 text-3xl md:text-4xl lg:text-5xl text-white underline decoration-wavy decoration-teal-400 bg-sky-600 backdrop-filter backdrop-blur-sm border-solid rounded-xl">
        Projects
      </h1>
      {projectsData.map((project) => (
        <div className="w-full" key={project.id}>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center py-4 md:py-8 font-bold"
          >
            <p className="text-3xl text-[#8d286f] first-letter:text-6xl hover:underline">
              {project.title}
            </p>
          </a>
          <div
            className={`flex ${
              project.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-col`}
            key={project.id}
          >
            <div className="w-full md:w-1/2 screen overflow-hidden relative">
              <img
                src="../design/logo.svg"
                alt={project.title}
                className="object-cover max-w-full h-auto transition-opacity duration-500"
              />
              <img
                src={project.image}
                alt={project.title}
                className={`object-cover max-w-full h-auto transition-opacity duration-500 absolute top-0 left-0 ${
                  isImageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="text-lg text-white text-justify">
                <span className="block my-12 lg:mb-12 lg:mt-0 text-3xl font-bold first-letter:text-[#8d286f] underline">
                  Introduction:
                </span>
                {showFullDescription ? (
                  <div className="mt-4">
                    {project.description}{" "}
                    <button
                      onClick={() => setShowFullDescription(false)}
                      className="text-[#8d286f] underline"
                    >
                      Read Less
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="mt-4">
                      {project.description.substring(0, 250)}...
                    </p>
                    <button
                      onClick={() => setShowFullDescription(true)}
                      className="text-[#8d286f] underline"
                    >
                      Read More
                    </button>
                  </div>
                )}
                <hr className="p-6 mt-12"></hr>
                <span className="block mt-4 mb-12 text-3xl font-bold first-letter:text-[#8d286f] underline text-left">
                  Technologies &amp; API's:
                </span>
                <span className="block mb-12 text-left">{project.skills}</span>
                <hr className="p-6"></hr>
                <div className="flex lg:flex-row flex-col">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#8d286f] text-white px-4 my-4 flex items-center py-2 rounded-md hover:bg-black mr-2 text-sm"
                  >
                    Live Site
                    {/* SVG path for the live site icon */}
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-600 text-white px-4 my-4 flex items-center py-2 rounded-md hover:bg-black mr-2 text-sm"
                  >
                    View Code
                    {/* SVG path for the GitHub icon */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
