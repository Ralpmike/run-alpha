import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const StrategyAnimatedCard = ({ title, description, image, index }) => {
  return (
    <div
      className={`flex  flex-col overflow-hidden w-full mx-auto  sm:flex-row relative py-12 md:py-0  gap-6 sm:gap-12 items-center h-auto md:h-[700px]
      `}
    >
      <motion.img
        className="flex flex-col absolute top-0 right-0 -z-2 object-cover w-full h-full"
        src={image}
        alt={title}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-1" />

      <div className="flex h-full w-full px-6 lg:px-36 py-6 sm:py-12 items-center justify-content-center rounded-md">

        <div className={`flex flex-col max-w-5xl text-white gap-3 md:backdrop-blur-3xl sm:gap-6 ${(index + 1) % 2 === 0 ? "ml-auto" : "mr-auto"} mx-0  md:p-8`}>
          <motion.h2
            className={`text-2xl sm:text-3xl md:text-5xl font-semibold font-lora underline decoration-alpha mb-8 underline-offset-8`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-base md:text-base xl:text-xl leading-8 font-quicksand"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default StrategyAnimatedCard;
