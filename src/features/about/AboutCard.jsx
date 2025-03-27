import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../../utilities/animations";


// eslint-disable-next-line react/prop-types
const AboutCard = ({ title, text, buttonText, imageUrl, reverse }) => (
  <div className={`flex ${reverse ? "flex-row-reverse" : ""} items-center flex-wrap lg:flex-nowrap gap-8 mb-16`}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInRight} className="min-w-3/6">
      <h2 className="md:text-3xl text-xl  uppercase my-8 font-bold">{title}</h2>
      <p className="text-sm tracking-[2] sm:text-base  leading-relaxed text-justify">{text}</p>
      <button className="group hover:bg-secondary font-bold px-3 py-4 mt-8 italic text-sm hover:text-white transition-all duration-300 flex items-center gap-4 motion-button">
        {buttonText}
        <FaChevronRight size={12} className="group-hover:mx-2 transition-all" />
      </button>
    </motion.div>
    <div className={`${reverse ? "2xl:pr-16" : "2xl:pl-16"} px-0 flex items-center xl:h-[500px]`}>
      <motion.img src={imageUrl} alt={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft} className="object-contain rounded-2xl shadow-lg" />
    </div>
  </div>
);

export default AboutCard;