import { useEffect, useRef } from "react";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";


function ContactUs() {
   const audioRef = useRef(null);

  useEffect(() => {
    // Play the beep sound every second
    const intervalId = setInterval(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 1000); // Beep every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="h-screen relative">
      <div className="relative w-full bg-[url('/map.jpg')] bg-cover bg-center h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/40 opacity-50 z-10"/>
        <div/>
        <div className="absolute flex top-[36rem] left-[34%] md:left-[43%]">
                <div className="animate-pulse">
                  <MdLocationPin size={32} />
                </div>
                  <p className="text-lg font-lora">Lagos</p>
        </div>
         {/* <div className="absolute right-0 md:w-[300px] w-[300px] z-8 bg-[url('/bulb.jpg')] bg-cover bg-center h-full">
        <div className="absolute top-0 right-0 w-full h-full bg-black/50 opacity-50 z-10"/>
        <div/>
        </div> */}


    <motion.div
      className="bg-[url('/harry-shelton-pPxhM0CRzl4-unsplash.jpg')] bg-center bg-cover w-[200px] md:w-[500px] absolute top-0 right-0 h-screen z-12 flex flex-col justify-center items-start"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="h-full bg-black/50 absolute w-full -z-12" />

      <motion.div
        className="md:p-10 p-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-white font-bold text-3xl font-dm-serif mb-8">
          Contact
        </h2>

        <div className="space-y-8 text-base">
          {/* Address */}
          <motion.p
            className="flex gap-4 text-white font-playfair items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="border-2 border-white rounded-full p-2">
              <MdLocationPin size={24} className="text-secondary" />
            </div>
            15, Jakande Estate, Ikeja <br />
            Lagos, Nigeria
          </motion.p>

          {/* Email */}
          <motion.p
            className="flex gap-4 text-white font-playfair items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="border-2 border-white rounded-full p-2">
              <MdEmail size={24} className="text-secondary" />
            </div>
            <a href="mailto:info@example.com">info@example.com</a>
          </motion.p>

          {/* Phone */}
          <motion.p
            className="flex gap-4 text-white font-playfair items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="border-2 border-white rounded-full p-2">
              <FaPhoneAlt className="text-secondary" />
            </div>
            +234 567 890 1234
          </motion.p>
        </div>
      </motion.div>
    </motion.div>

        </div>
      </div> 
         )
  
}

export default  ContactUs