import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white 
      px-6 md:px-20"
    >
      {/* Profile Image */}
      <motion.img
        src="/images/tanjiro-img.jpeg"
        alt="Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover 
        shadow-xl mb-6 border-2 border-gray-500/50"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-extrabold text-center mb-4 
        bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        Hi, I’m Sourabh
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-300 
        text-center max-w-xl md:max-w-2xl mb-8 px-2"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        A Full-Stack Developer passionate about building scalable web apps and
        modern digital experiences.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="/Sourabh-RESUME.pdf"
        download
        className="flex items-center justify-center gap-2 
        px-4 sm:px-6 py-2 sm:py-3 
        rounded-xl sm:rounded-2xl 
        bg-gradient-to-r from-blue-500 to-purple-600 
        text-sm sm:text-base md:text-lg font-semibold 
        shadow-lg hover:shadow-purple-500/50 
        hover:scale-105 transition-transform"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          delay: 1,
        }}
      >
        <Download className="w-4 h-4 sm:w-5 sm:h-5" />
        Download Resume
      </motion.a>
    </section>
  );
}
