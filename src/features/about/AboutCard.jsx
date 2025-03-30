import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../../utilities/animations";


// eslint-disable-next-line react/prop-types
const AboutCard = ({ title, text, buttonText, imageUrl, reverse }) => (
  <div className={`flex ${reverse ? "flex-row-reverse bg-gray-200" : ""} items-center flex-wrap lg:flex-nowrap gap-8 mb-16 2xl:px-40 lg:px-36 px-6 md:py-12`}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInRight} className="min-w-3/6">
      <h2 className="md:text-3xl font-lora text-xl  uppercase my-8 font-bold">{title}</h2>
      <p className="text-sm tracking-[2] sm:text-base xl:text-lg leading-relaxed text-justify font-quicksand">{text}</p>
      <button className="group hover:bg-alpha hover:rounded-full hover:pr-4 font-bold px-3 py-4 mt-8 text-sm hover:text-white transition-all duration-300 flex items-center gap-4 motion-button">
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