import { motion, useMotionValue, useTransform } from "framer-motion"
import PropTypes from "prop-types"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6"

const SwipeCard = ({ id, cards, setCards, image, quote, title, name }) => {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0])
  const rotateR = useTransform(x, [-150, 150], [-18, 18])
  const isFront = id === cards[cards.length - 1].id

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6
    return `${rotateR.get() + offset}deg`
  })

  const handleDragEnd = (_, info) => {
    if (Math.abs(info.offset.x) > 100) {
      // Animate card out of view before removing it
      x.set(info.offset.x > 0 ? 300 : -300) // Move off-screen
      opacity.set(0) // Fade out

      setTimeout(() => {
        setCards((prev) => prev.filter((card) => card.id !== id))
      }, 300) // Remove after animation
    }
  }

  return (
    <motion.div
      className="h-105 w-150 xl:w-96 mx-auto rounded-lg origin-bottom object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.2s transform ease-out",
        boxShadow: isFront
          ? "0 20px 30px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{ scale: isFront ? 1 : 0.98 }}
      drag="x"
      onDragEnd={handleDragEnd}
    >
      <div className="bg-alpha w-[350px] md:w-[400px] lg:w-[720px] lg:h-[600px] shadow-md rounded-xl p-12 flex flex-col items-center text-center space-y-8 cursor-pointer group hover:text-white text-white ease-in-out duration-300 border border-white">
        <img src={image} alt={name} className="rounded-full h-30 w-30 object-cover" />
        <blockquote className="text-white lg:text-xl italic leading-7 font-inter group-hover:text-white">
          <FaQuoteLeft size={25} className="inline-block"/>
          {quote.slice(0,550)}...
          <FaQuoteRight size={25} className="inline-block" />
        </blockquote>
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="mb-8">{title}</p>
        </div>
      </div>
    </motion.div>
  )
}


export default SwipeCard
