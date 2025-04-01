import { useState } from "react"
import SwipeCard from "../components/SwipeCard"
import teamMembers, { heroSectionData } from "../data/data"
import HeroSectionCard from "../ui/HeroSectionCard"
import { motion } from "framer-motion"
import TeamSection from "../features/team/TeamSection"
import { BiArrowFromRight, BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { PiArrowBendUpLeftBold, PiArrowBendUpRightBold } from "react-icons/pi"

function Team() {

  const [cards, setCards] = useState(teamMembers)

    const handleSwipe = (direction) => {
      setCards((prevCards) => {
        if (prevCards.length < 2) return prevCards; // Prevent errors

        if (direction === "right") {
          return [...prevCards.slice(1), prevCards[0]]; // Move first card to the end
        } else {
          return [prevCards[prevCards.length - 1], ...prevCards.slice(0, -1)]; // Move last card to the front
        }
      });
    };

  
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSectionCard data={heroSectionData.teams} />
      </motion.div>

      <motion.div
        className="md:max-w-[1500px] max-w-lg w-full md:mx-auto md:grid grid-cols-1 lg:grid-cols-2 px-8 md:px-32 py-8 place-items-center gap-16 md:my-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="row-start-2 md:row-start-1">
          <motion.img
            src="/pexels-diva-plavalaguna-6149793.jpg"
            alt=""
            className="rounded-2xl mb-6 md:h-[500px] object-cover"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>


        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="md:text-3xl text-2xl mb-4 font-lora text-alpha font-extrabold text-">Join Us</h2>
          <p className="tracking-[2] text-sm lg:text-xl leading-relaxed font-quicksand">
            We develop systematic investment models based on scientific methods, rigorous research and analysis that rely on advanced technology. In order to achieve success, we rely on our most important asset: the collaborative effort, resourcefulness and talent of our employees. Our continued success is truly determined by our ability to attract and retain exceptional talent. We are always on the lookout for team-oriented individuals with a capacity to apply creative and scientific thinking to solve challenging problems. Perhaps you can join us?
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="md:max-w-[1500px] max-w-lg w-full md:mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 md:px-32 py-4 place-items-center gap-4 my-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="md:text-3xl text-xl mb-8  font-lora text-alpha capitalize font-extrabold row-start-2">
            workplace & culture
          </h2>
          <p className="tracking-[2] text-sm lg:text-xl leading-relaxed font-quicksand mb-6">
            We believe that a successful and productive team is one where everyone feels valued and respected. Our culture values open communication, collaboration, and a growth mindset. We also strive to create a work environment that fosters a sense of belonging and purpose. Our focus is on providing a supportive and inclusive environment where employees feel comfortable expressing their thoughts, ideas, and concerns. As a team-oriented company, we believe that every member contributes to the success of our organization. We encourage collaboration, empathy, and a shared goal to create a harmonious and fulfilling work environment.
          </p>
        </motion.div>

        <motion.img
          src="/team/annie-spratt-QckxruozjRg-unsplash.jpg"
          alt=""
          className="rounded-2xl"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </motion.div>

      <div className="mb-16">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:items-center justify-center bg-alpha text-white md:px-32 md:text-center px-6 md:py-16 py-6">
            <h2 className="text-2xl md:text-3xl  mb-8  font-lora font-extrabold row-start-2">
              What We Do
            </h2>
            <p className="tracking-[2] text-sm md:text-base lg:text-xl leading-relaxed font-quicksand">
              We specialize in developing innovative and sustainable solutions that help our clients achieve their goals. Our team of experts combines expertise in various fields, such as engineering, environmental science, and business management. We continuously strive to improve our processes, technology, and communication to ensure that our clients receive the best possible results.
            </p>
          </motion.div>
          <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="">
            <img className="object-cover h-full" src="/pexels-olly-3769021.jpg" alt="" />
          </motion.div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
          {[
          "/team/tobias-mrzyk-iuqmGmst5Po-unsplash.jpg",
          "/team/helena-lopes-PGnqT0rXWLs-unsplash.jpg",
          "/ninthgrid-4-RLopzTVQ8-unsplash.jpg",
          "/team/chang-duong-Sj0iMtq_Z4w-unsplash.jpg",
        ].map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="object-cover w-fit h-fit"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.4 }}
          />
        ))}
        </div>
      </div>

      <div className="my-28 px-24 md:text-center max-w-3xl md:mx-auto">
        <h2 className="text-xl md:text-3xl mb-8  font-lora text-alpha font-extrabold">
          What We Offer
        </h2>
        <p className="tracking-[2] text-sm md:text-base lg:text-[22px] max-w-sm md:max-w-4xl  md:mx-auto  leading-relaxed font-quicksand">
          At Run Alpha, we strive to offer a comprehensive and transparent investment experience that aligns with our clients&apos; financial goals and risk tolerance. We believe that by providing a safe, transparent, and accessible platform, we can help clients make informed decisions while also fostering a culture of continuous learning and growth. Our mission is to create a platform that empowers individuals to make informed decisions, while also fostering a culture of continuous learning and growth.
        </p>
      </div>

        <div className="min-h-screen bg-gray-300 py-12 w-full max-w-screen relative">
             <div className=" justify-between absolute my-auto top-1/3 w-full z-20 px-4 hidden lg:flex">
          <button
            onClick={() => handleSwipe("left")}
            className="bg-alpha text-white p-3 rounded-full shadow-md hover:bg-opacity-80 transition"
          >
            <PiArrowBendUpLeftBold size={32} />
          </button>
          <button
            onClick={() => handleSwipe("right")}
            className="bg-alpha text-white p-3 rounded-full shadow-md hover:bg-opacity-80 transition"
          >
            <PiArrowBendUpRightBold size={32} />
          </button>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-4xl font-lora font-extrabold text-alpha text-center mb-6">Meet The Team</motion.p>
        <div className="hidden lg:grid place-items-center items-start lg:h-[100ch] mt-12 max-w-screen">
          {teamMembers.map((card) => (
            <SwipeCard
             key={cards[0].id++} 
              id={cards[0].id}
              cards={cards}
              setCards={setCards}
              {...cards[0]} 
            />
          ))}
        </div>
        <div className=" lg:hidden flex flex-wrap">
              <TeamSection />
        </div>
      </div>

    </section>
  )
}

export default Team