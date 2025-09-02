import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-25 py-20 bg-gray-950"
    >
      {/* Left Content */}
      <div className="text-center md:text-left max-w-2xl space-y-6 md:pr-12">
        {/* Typing Effect */}
        <h1 className="text-4xl md:text-6xl font-bold text-purple-400">
          <TypeAnimation
            sequence={[
              "Hi, I’m Sourabh Bisht 👋",
              2000,
              "I’m a Full-Stack Developer 💻",
              2000,
              "I Build Scalable Applications 🚀",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Crafting modern, scalable, and user-friendly web applications with
          clean design and powerful performance.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1mC5d4s8yjdRynrhgWFTPeApb9ds6WfVZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl text-blue-600 border border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 shadow-lg transition"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Right Content (Profile Image with Tilt + Glitter Effect) */}
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={500}
      >
        <div className="relative group mb-10 md:mb-0">
          <div className="absolute inset-0 rounded-full md:rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-2xl animate-pulse"></div>
          <img
            src="/images/tanjiro-img.jpeg"
            alt="Sourabh"
            className="relative w-48 h-48 md:w-80 md:h-80 object-cover rounded-full md:rounded-2xl shadow-xl ring-2 ring-white/20 group-hover:shadow-blue-500/40 transition duration-500"
          />
        </div>
      </Tilt>
    </section>
  );
};

export default Hero;
