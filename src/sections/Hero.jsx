"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-20"
    >
      <motion.img
        src="/images/tanjiro-img.jpeg"
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover shadow-xl mb-6 border-2 border-gray-500/50"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.h1
        className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        Hi, I’m Sourabh
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 text-center max-w-2xl mb-8"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        A Full-Stack Developer passionate about building scalable web apps and
        modern digital experiences.
      </motion.p>

      <motion.a
        href="./src/assets/Sourabh-RESUME.pdf"
        download
        className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-transform"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          delay: 1,
        }}
      >
        <Download className="w-5 h-5" />
        Download Resume
      </motion.a>
    </section>
  );
}
