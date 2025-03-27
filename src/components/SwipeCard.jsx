import { motion, useMotionValue, useTransform } from "framer-motion"
import PropTypes from "prop-types"

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
      className="h-96 w-72 rounded-lg origin-bottom object-cover hover:cursor-grab active:cursor-grabbing"
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
      <div className="bg-white w-[400px] xl:w-[550px] shadow-md rounded-xl p-6 flex flex-col items-center text-center space-y-8 cursor-pointer hover:bg-secondary hover:text-white ease-in-out duration-300">
        <img src={image} alt={name} className="rounded-full object-cover" />
        <blockquote className="text-gray-600 lg:text-xl italic font-inter">
          &apos;{quote}
        </blockquote>
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-500">{title}</p>
        </div>
        <span className="text-gray-400 text-xl">›</span>
      </div>
    </motion.div>
  )
}


export default SwipeCard
