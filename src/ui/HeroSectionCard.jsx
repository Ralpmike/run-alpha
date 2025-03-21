import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const HeroSectionCard = ({ data: { backgroundImage, description, title } }) => {
  return (
    <div
      className="w-full text-center relative md:h-[70vh] h-[600px] bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-6" />

      {/* Content */}
      <div className="absolute flex justify-center items-center flex-col top-0 left-0 w-full md:px-8 h-full text-white z-8">
        <motion.h1
          className="text-7xl font-extrabold mb-6 font-quicksand"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="leading-relaxed text-base md:text-xl max-w-7xl italic font-inter"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  )
}

export default HeroSectionCard
