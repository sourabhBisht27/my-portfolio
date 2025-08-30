import { motion } from "framer-motion";

export default function Section({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
    >
      {children}
    </motion.div>
  );
}
