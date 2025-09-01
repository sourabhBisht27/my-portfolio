import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import aboutAnimation from "../assets/laptop.json";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-gray-900 to-gray-950 
      text-gray-100 py-16 px-6 md:px-20 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <Lottie
            animationData={aboutAnimation}
            loop={true}
            className="w-56 sm:w-72 md:w-[400px]"
          />
        </motion.div>

        {/* About text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 
          bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            I’m a passionate Full Stack Developer with a strong focus on
            building scalable, user-friendly applications. I enjoy solving
            problems, learning new technologies, and bringing ideas to life
            through clean and efficient code.
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-400">
            When I’m not coding, I’m exploring design patterns, system
            architectures, and improving my skills in modern web technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
