import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "EXTracker",
    description:
      "A fullstack app to track daily expenses and incomes with charts and reports.",
    image: "./src/assets/images/project-1.png",
    github: "https://github.com/sourabhBisht27/expense-tracker",
    demo: "https://expense-tracker-yjwc.onrender.com/auth",
  },
  {
    title: "Thoughts Trail",
    description:
      "A MERN blogging platform with authentication, likes, and comments.",
    image: "./src/assets/images/project-2.png",
    github: "https://github.com/Atuldubey98/thought_trail",
    demo: "https://blogging-demo.vercel.app/",
  },
  {
    title: "Task Tracker",
    description:
      "A simple yet powerful todo manager with categories and due dates.",
    image: "./src/assets/images/project-3.jpeg",
    github: "https://github.com/sourabhBisht27/Task-Tracker",
    demo: "https://todo-demo.vercel.app/",
  },
  {
    title: "Movie Search",
    description:
      "Look for your favourite movies something we all adore, worth dying for.",
    image: "./src/assets/images/project-4.jpeg",
    github: "https://github.com/sourabhBisht27/movie_search",
    demo: "https://movie-search-pi-seven.vercel.app/",
  },
  {
    title: "Mojito Wrld",
    description:
      "A Landing page for amazing mojito's something we all adore, worth dying for.",
    image: "./src/assets/images/project-5.png",
    github: "https://github.com/sourabhBisht27/cocktails",
    demo: "https://cocktails-umber.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-20 md:px-20 py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        My Projects
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
