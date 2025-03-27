
import { motion } from "framer-motion";


export default function LandingPage() {
  return (
    
    <div className="h-[700px] relative w-full lg:h-dvh shadow-2xl">
      <video
        autoPlay
        loop
        muted
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/5224-183786646.mp4" type="video/mp4" />
       
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 -z-5"/>
      <div className="flex flex-col items-center lg:px-48 justify-center h-full z-20 text-white gap-6">
        <div className="space-y-3 px-8">
          <motion.h1 className="text-[2rem] md:text-5xl lg:text-7xl md:max-w-[1300px] leading-[1.2] max-w-sm w-[600px] font-lora text-center font-bold"
            initial={{ y: '50%', opacity: 0 }}
            animate={{ y: '0', opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
          >
            Driven by Alpha. 
          </motion.h1>

          <motion.p
            className="text-[2rem] md:text-5xl lg:text-7xl max-w-3xl font-lora text-center text-amber-400 font-semibold"
            initial={{ y: '100%', opacity: 0 }} // Start off-screen to the right with no opacity
            animate={{ y: '0', opacity: 1 }}    // Move to the normal position with full opacity
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }} // Duration, easing, and delay
          >
            Powered by Data.
          </motion.p>

        </div>
      
      
      </div>

    </div>
  )
}
