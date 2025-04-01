import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../../utilities/animations";


// eslint-disable-next-line react/prop-types
const AboutCard = ({ title, text, imageUrl, reverse }) => (
  <div className={`flex ${reverse ? "flex-row-reverse bg-gray-200" : ""} items-center flex-wrap lg:flex-nowrap gap-8 mb-16 2xl:px-40 lg:px-36 px-6 md:py-12`}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInRight} className="min-w-3/6 space-y-3">
      <h2 className="md:text-3xl font-lora text-xl capitalize text-alpha  font-bold pt-8">{title}</h2>
      <p className="text-sm sm:text-base xl:text-lg leading-relaxed font-quicksand">{text}</p>
    </motion.div>
    <div className={`${reverse ? "2xl:pr-16" : "2xl:pl-16"} px-0 flex items-center xl:h-[500px]`}>
      <motion.img src={imageUrl} alt={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft} className="object-contain rounded-2xl shadow-lg mb-6" />
    </div>
  </div>
);

export default AboutCard;