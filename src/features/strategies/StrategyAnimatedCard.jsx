import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

// eslint-disable-next-line react/prop-types
const StrategyAnimatedCard = ({ title, description, image, index, services,disclaimerButton }) => {

  const navigate = useNavigate(); // Hook for navigation
  const handleDisclaimerClick = () => {
    navigate('/disclaimer'); 
  };
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
            className={`text-2xl sm:text-3xl md:text-5xl font-semibold font-lora underline decoration-secondary/80 mb-8 underline-offset-8`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            {title}
          </motion.h2>
          <motion.p
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-base md:text-base xl:text-xl leading-8 font-quicksand text-justify"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
          />
          {disclaimerButton && (
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false }} 
              onClick={handleDisclaimerClick} 
              className="bg-secondary px-4 py-2 border-none rounded-md md:w-1/4 font-semibold hover:bg-secondary/60 transition duration-300 ease-in-out"
            >
              Review Disclaimer
            </motion.button>
          )}
          {services && (
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false }}
                key={service.id} className="flex items-center gap-4">
                  <FaCircle className="text-secondary text-xs" />
                  <p
                    dangerouslySetInnerHTML={{ __html: service.desc }}
                    className="text-base font-medium"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
  </div>
    </div>
  );
};

export default StrategyAnimatedCard;
