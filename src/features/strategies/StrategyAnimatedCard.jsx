import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const StrategyAnimatedCard = ({ title, description, image, reverse }) => {
  return (
    <div
      className={`flex  flex-col overflow-hidden w-full mx-auto px-6 lg:px-36 sm:flex-row ${reverse ? "sm:flex-row-reverse" : ""}  gap-6 sm:gap-12 py-6 sm:py-12 items-center
      `}
    >
      <motion.div
        className="sm:w-1/2 flex flex-col  shadow-lg  rounded-lg border-secondary max-w-[600px]"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-auto  object-contain rounded-lg"
        />
      </motion.div>
      <div className="sm:w-1/2 flex flex-col gap-3 sm:gap-6">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold font-roboto underline decoration-secondary underline-offset-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-[12px] md:text-base font-roboto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export default StrategyAnimatedCard;
