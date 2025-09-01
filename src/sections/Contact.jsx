import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 sm:px-10 md:px-20 py-16 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 
          bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-gray-400 mb-12 max-w-2xl mx-auto text-base sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Got an idea, project, or just want to say hi? Let’s connect!
        </motion.p>

        {/* Social Links (Mobile only) */}
        <motion.div
          className="grid grid-cols-3 gap-6 md:hidden justify-items-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delayChildren: 0.2, staggerChildren: 0.15 },
            },
          }}
        >
          {[
            {
              icon: <Github size={28} />,
              href: "https://github.com/sourabhBisht27",
            },
            {
              icon: <Linkedin size={28} />,
              href: "https://linkedin.com/in/iamsourabh125",
            },
            {
              icon: <Twitter size={28} />,
              href: "https://twitter.com/yourprofile",
            },
            {
              icon: <Instagram size={28} />,
              href: "https://instagram.com/nomore_sourabh/",
            },
            { icon: <Mail size={28} />, href: "mailto:youremail@example.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="space-y-6 max-w-xl mx-auto text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-gray-800 text-white 
            focus:outline-none focus:ring-2 focus:ring-purple-500 text-base sm:text-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-gray-800 text-white 
            focus:outline-none focus:ring-2 focus:ring-purple-500 text-base sm:text-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-4 rounded-xl bg-gray-800 text-white 
            focus:outline-none focus:ring-2 focus:ring-purple-500 text-base sm:text-lg"
          />
          <motion.button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 
            font-semibold transition shadow-lg text-base sm:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
