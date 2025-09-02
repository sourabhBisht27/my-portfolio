import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { User } from "lucide-react"; // clean icon for heading
import aboutAnimation from "../assets/laptop.json";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black 
      text-gray-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <Lottie
            animationData={aboutAnimation}
            loop={true}
            className="w-52 sm:w-72 md:w-[380px] lg:w-[420px]"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          {/* Heading */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <User className="w-8 h-8 text-indigo-400" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold 
              bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
            >
              About Me
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            I’m a passionate{" "}
            <span className="text-indigo-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            with a strong focus on building scalable, user-friendly
            applications. I love solving problems, learning new technologies,
            and bringing ideas to life through clean and efficient code.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-400">
            Beyond coding, I enjoy exploring{" "}
            <span className="text-purple-400">design patterns</span>,{" "}
            <span className="text-purple-400">system architectures</span>, and
            constantly improving my skills in modern web technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
