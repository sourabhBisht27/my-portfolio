// src/components/SocialLinks.tsx
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function SocialLinks() {
  return (
    <motion.div
      className="hidden md:flex fixed left-6 top-1/3 flex-col space-y-4 z-50"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 12 }}
    >
      <a
        href="https://github.com/sourabhBisht27"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white shadow-lg transition transform hover:scale-110"
      >
        <Github className="w-6 h-6" />
      </a>

      <a
        href="https://linkedin.com/in/iamsourabh125"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-blue-700 hover:bg-blue-600 text-white shadow-lg transition transform hover:scale-110"
      >
        <Linkedin className="w-6 h-6" />
      </a>

      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white shadow-lg transition transform hover:scale-110"
      >
        <Twitter className="w-6 h-6" />
      </a>

      <a
        href="https://instagram.com/nomore_sourabh/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 text-white shadow-lg transition transform hover:scale-110"
      >
        <Instagram className="w-6 h-6" />
      </a>
    </motion.div>
  );
}
