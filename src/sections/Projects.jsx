import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "../components/ProjectCard";
import { FolderKanban } from "lucide-react";

const projects = [
  {
    title: "EXTracker",
    description:
      "A fullstack app to track daily expenses and incomes with charts and reports.",
    image: "/images/project-1.png",
    github: "https://github.com/sourabhBisht27/expense-tracker",
    demo: "https://expense-tracker-yjwc.onrender.com/auth",
  },
  {
    title: "Thoughts Trail",
    description:
      "A MERN blogging platform with authentication, likes, and comments.",
    image: "/images/project-2.png",
    github: "https://github.com/Atuldubey98/thought_trail",
    demo: "https://blogging-demo.vercel.app/",
  },
  {
    title: "Task Tracker",
    description:
      "A simple yet powerful todo manager with categories and due dates.",
    image: "/images/project-3.jpeg",
    github: "https://github.com/sourabhBisht27/Task-Tracker",
    demo: "https://todo-demo.vercel.app/",
  },
  {
    title: "Movie Search",
    description:
      "Look for your favourite movies something worth binge watching and staying up late for.",
    image: "/images/project-4.jpeg",
    github: "https://github.com/sourabhBisht27/movie_search",
    demo: "https://movie-search-pi-seven.vercel.app/",
  },
  {
    title: "Mojito Wrld",
    description:
      "A Landing page for amazing mojito's something worth paying your time to.",
    image: "/images/project-5.png",
    github: "https://github.com/sourabhBisht27/cocktails",
    demo: "https://cocktails-umber.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 sm:px-10 md:px-20 py-16 bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100"
    >
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <FolderKanban className="w-8 h-8 text-cyan-400" />
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          My Projects
        </span>
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        lazy={true}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="group relative h-full">
              <ProjectCard project={project} />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
