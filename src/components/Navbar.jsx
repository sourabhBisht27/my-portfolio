import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white text-black dark:bg-gray-900 dark:text-white shadow-md p-4 flex justify-between items-center"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-xl font-bold">Sourabh</h1>
      <ul className="flex gap-6">
        <li>
          <a
            href="#hero"
            className="hover:text-blue-500"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-blue-500"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-blue-500"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-blue-500"
          >
            Contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}
