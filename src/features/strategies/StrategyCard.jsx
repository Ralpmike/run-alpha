import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const StrategyCard = ({ title, description, image, reverse, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      className={`flex flex-col px-6 lg:px-30 md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-6 py-12 
      ${(index + 1) % 2 === 0 ? "bg-gray-100" : ""}`}
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full md:w-1/2 rounded-lg shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      />
      <div className="w-full md:w-1/2">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default StrategyCard;
