import { useEffect, useRef } from "react";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";
import HeroSectionCard from "../ui/HeroSectionCard";
import { heroSectionData } from "../data/data";
import ContactForm from "../components/ContactForm";
import { Toaster } from "react-hot-toast";


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
    <div className="w-full relative bg-gray-200">
     <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSectionCard data={heroSectionData.contact} />
      </motion.div>
      
       
    <motion.div
      className="h-auto px-8 lg:px-32 py-38 flex flex-col lg:flex-row justify-center items-center bg-[url('/maps.png')] bg-cover bg-center relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

       {/* <div className="absolute flex top-[36rem] left-[34%] md:left-[43%] z-70">
                <div className="animate-pulse text-black h-full">
                  <MdLocationPin size={32} />
                </div>
                  <p className="text-lg font-lora">Lagos</p>
        </div> */}

      <motion.div
        className="md:p-10 p-2 max-w-xl py-8 rounded-lg shadow-md bg-white/50 backdrop-blur-sm border border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-alpha font-quicksand font-bold text-base mb-4">
          Contact
        </h2>

        <p className="font-quicksand mb-6 text-alpha max-w-3xl">
          Run alpha Investments is based in Lagos, Nigeria. We are always happy to
          hear from you. Please reach out to us using the contact form below or contact us at the email address or phone number provided.
        </p>

            <div className="space-y-8 text-base">
              {/* Address */}
             <div className="space-y-4">
              <p className="font-bold text-alpha font-quicksand mb-8">Head Office</p>
               <motion.p
                className="flex flex-row gap-2 text-alpha font-quicksand items-center"
                whileHover={{ scale: 1.05 }}
              >
                <MdLocationPin size={30} className="text-alpha text-lg" />
                  1 Uwa Close, Off Billings Way, <br /> Oregun, Lagos.
              </motion.p>
             </div>

              {/* Email */}
             

              {/* Phone */}
              <motion.p
                className="flex gap-4 text-alpha font-quicksand items-center pb-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="">
                  {/* <FaPhone size={24} className="text-alpha" /> */}
                  TEL:
                </div>
                <a className="" href="tel:+2349093717972">+234 909 371 7972</a>
              </motion.p>
               <motion.p
                className="flex gap-4 text-alpha font-quicksand items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="">
                  {/* <MdEmail size={30} className="text-a" /> */}
                  E:
                </div>
                <a className="underline" href="mailto:info@example.com">hello@runalpha.co</a>
              </motion.p>
            </div>
          </motion.div>
      {/* <div className="lg:w-1/2 mx-auto w-full">
        <ContactForm />
      </div> */}
      </motion.div>
    <div/>


      <Toaster position="top-right"  reverseOrder={false}/>
    </div>
         )
  
}

export default  ContactUs