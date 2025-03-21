import { useState } from "react"
import SwipeCard from "../components/SwipeCard"
import teamMembers, { heroSectionData } from "../data/data"
// import ProfileCard from "../features/team/TeamProfileCard"
import HeroSectionCard from "../ui/HeroSectionCard"
import { motion } from "framer-motion"

function Team() {
  
  const [cards, setCards] = useState(teamMembers)
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
        className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 px-12 md:px-32 py-12 place-items-center gap-16 my-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="row-start-2 md:row-start-1">
         <motion.img
          src="/team/austin-distel-wD1LRb9OeEo-unsplash.jpg"
          alt=""
          className="rounded-2xl object-cover"
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
          <h2 className="text-3xl mb-8 font-playfair uppercase font-extrabold text-">JOIN US</h2>
        <p className="tracking-[2] text-base lg:text-xl leading-relaxed font-lora">
          We develop systematic investment models based on scientific methods, rigorous research and analysis that rely on advanced technology. In order to achieve success, we rely on our most important asset: the collaborative effort, resourcefulness and talent of our employees. Our continued success is truly determined by our ability to attract and retain exceptional talent. We are always on the lookout for team-oriented individuals with a capacity to apply creative and scientific thinking to solve challenging problems. Perhaps you can join us?
        </p>
        </motion.div>
      </motion.div>

       <motion.div
        className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 px-12 md:px-32 py-12 place-items-center gap-16 my-24"
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
          <h2 className="text-3xl mb-8 font-playfair uppercase font-extrabold row-start-2">
            WORKPLACE & CULTURE
          </h2>
          <p className="tracking-[2] text-base lg:text-xl leading-relaxed font-lora">
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
           <div className="text-center bg-secondary text-white md:px-32 px-6 md:py-16 py-6">
            <h2 className="text-3xl mb-8 font-playfair uppercase font-extrabold row-start-2">
              WHAT WE DO
            </h2>
             <p className="tracking-[2] text-base lg:text-lg leading-relaxed font-lora">
              At Run Alpha, we strive to offer a comprehensive and transparent investment experience that aligns with our clients&apos; financial goals and risk tolerance. We believe that by providing a safe, transparent, and accessible platform, we can help clients make informed decisions while also fostering a culture of continuous learning and growth. Our mission is to create a platform that empowers individuals to make informed decisions, while also fostering a culture of continuous learning and growth.
          </p>
        </div>
          <div className="">
            <img src="/team/thisisengineering-1dwyU46p7eE-unsplash.jpg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
          "/team/tobias-mrzyk-iuqmGmst5Po-unsplash.jpg",
          "/team/helena-lopes-PGnqT0rXWLs-unsplash.jpg",
          "/team/charlesdeluvio-Lks7vei-eAg-unsplash.jpg",
          "/team/chang-duong-Sj0iMtq_Z4w-unsplash.jpg",
        ].map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="object-cover w-full h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          />
        ))}
        </div>
      </div>

       <div className="my-28 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl mb-8 font-playfair uppercase font-extrabold">
           WHAT WE OFFER
          </h2>
         <p className="tracking-[2] text-base lg:text-[22px] leading-relaxed font-lora">
          At Run Alpha, we strive to offer a comprehensive and transparent investment experience that aligns with our clients&apos; financial goals and risk tolerance. We believe that by providing a safe, transparent, and accessible platform, we can help clients make informed decisions while also fostering a culture of continuous learning and growth. Our mission is to create a platform that empowers individuals to make informed decisions, while also fostering a culture of continuous learning and growth.
        </p>
        </div>

        <div className="flex flex-col items-center min-h-screen bg-gray-100 py-12 w-full">
           <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl font-playfair uppercase font-extrabold text-center  text-secondary">MEET THE TEAM</motion.p>
          <div className="grid min-h-[70vh] place-items-center pr-20 xl:pr-72">
          {teamMembers.slice(0, 5).map((card) => (
          <SwipeCard
          key={card.id}
          id={card.id}
          cards={cards}
          setCards={setCards}
          {...card}
          />
        ))}
    </div>
        </div>
      
  </section>
  )
}

export default Team