import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import { Briefcase } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import aniDev from "../assets/hero-dev.json";

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "BusinessNext",
      date: "Nov 2024 - Jan 2025",
      points: [
        "Built and optimized full-stack web applications for BFSI domain solutions.",
        "Designed secure authentication and authorization workflows using JWT.",
        "Developed dynamic dashboards with React.js for real-time data visualization.",
        "Integrated REST APIs with React and Node.js to streamline user interactions.",
      ],
      dotColor: "bg-blue-500",
    },
    {
      role: "Frontend Developer",
      company: "OptimumERP",
      date: "Jan 2024 - Jun 2024",
      points: [
        "Developed a responsive website optimized for desktop and mobile.",
        "Designed an interactive feature increasing user interactions by 300+ per week.",
        "Integrated third-party APIs for payment processing and account management.",
        "Collaborated with cross-functional teams across five client projects.",
      ],
      dotColor: "bg-green-500",
    },
  ];

  // Motion variants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Scroll animation for vertical timeline line
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="px-6 sm:px-10 md:px-20 relative py-20 
      bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Illustration */}
        <div className="hidden md:flex justify-center">
          <Lottie
            animationData={aniDev}
            className="w-64 lg:w-72"
            loop
          />
        </div>

        {/* Timeline */}
        <div className="md:col-span-2">
          {/* Section Heading */}
          <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
            <Briefcase className="w-8 h-8 text-indigo-400" />
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold 
              bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
            >
              Experience
            </h2>
          </div>

          <div
            ref={ref}
            className="relative pl-8"
          >
            {/* Timeline line */}
            <motion.div
              className="absolute left-0 top-0 w-[2px] h-full bg-gray-700 origin-top"
              style={{ scaleY: lineScale }}
            />

            {/* Experience items */}
            <motion.div
              className="space-y-12"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative pl-8"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                      delay: 0.2,
                    }}
                    className={`absolute top-1.5 -left-[9px] w-4 h-4 ${exp.dotColor} rounded-full border-2 border-gray-900 shadow-lg`}
                  />

                  {/* Role & Company */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-gray-400 block mb-3">
                    {exp.company} • {exp.date}
                  </span>

                  {/* Points with icons (hidden on mobile) */}
                  <ul className="hidden sm:block mt-2 space-y-2 text-gray-300">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-base leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
