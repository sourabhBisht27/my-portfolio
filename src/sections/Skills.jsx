import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiSequelize,
  SiDocker,
  SiNextdotjs,
  SiPrisma,
  SiFirebase,
  SiVercel,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "SQL", icon: <SiSequelize className="text-blue-300" /> },
  { name: "Prisma", icon: <SiPrisma className="text-white" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-4 sm:px-8 md:px-20 py-20 bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        ⚡ Skills
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="text-5xl cursor-pointer"
            >
              {skill.icon}
            </motion.div>
            <span className="text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
