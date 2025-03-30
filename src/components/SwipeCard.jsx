import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const SwipeCard = ({ id, cards, setCards, image, quote, title, name }) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotateR = useTransform(x, [-150, 150], [-18, 18]);
  const isFront = id === cards[cards.length - 1]?.id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateR.get() + offset}deg`;
  });

  // Handles swipe & remove logic
  const handleSwipe = (direction) => {
    x.set(direction === "right" ? 300 : -300);
    opacity.set(0);

    setTimeout(() => {
      setCards((prev) => {
        const newCards = prev.filter((card) => card.id !== id);
        const swipedCard = prev.find((card) => card.id === id);
        return swipedCard ? [...newCards, swipedCard] : newCards;
      });

      // Reset animation values
      x.set(0);
      opacity.set(1);
    }, 300);
  };

  // Drag event for touch/mouse swipe
  const handleDragEnd = (_, info) => {
    if (Math.abs(info.offset.x) > 100) {
      handleSwipe(info.offset.x > 0 ? "right" : "left");
    }
  };


  return (
    <motion.div
      key={id}
      className="mx-auto rounded-lg origin-bottom object-cover hover:cursor-grab active:cursor-grabbing h-dvh relative"
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
      {/* Swipe Navigation Arrows */}
      <BiChevronLeft
        size={100}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-alpha cursor-pointer"
        onClick={() => handleSwipe("left")}
      />
      <BiChevronRight
        size={100}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-alpha cursor-pointer"
        onClick={() => handleSwipe("right")}
      />

      {/* Card Content */}
      <div className="bg-alpha w-[350px] md:w-[400px] lg:w-[720px] h-auto shadow-md rounded-xl p-12 flex flex-col items-center text-center space-y-8 cursor-pointer group hover:text-white text-white ease-in-out duration-300 border border-white">
        <img src={image} alt={name} className="rounded-full h-30 w-30 object-cover" />
        <blockquote className="text-white lg:text-xl italic leading-7 font-inter group-hover:text-white">
          <FaQuoteLeft size={25} className="inline-block" />
          {quote}...
          <FaQuoteRight size={25} className="inline-block" />
        </blockquote>
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="mb-8">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SwipeCard;