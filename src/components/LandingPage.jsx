import { Link } from "react-router";
import Button from "../ui/button";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";


export default function LandingPage() {
  return (
    <div className="h-dvh relative">
      <video
        autoPlay
        loop
        muted
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 -z-5"></div>
      <div className="flex flex-col items-center justify-center h-full z-20 text-white text-center  gap-6">
        <div className="space-y-3">
          <motion.h1 className="text-[2rem] md:text-5xl lg:text-7xl md:max-w-[1000px] leading-[1.2] mx-auto font-semibold max-w-sm w-full"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '0', opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
          >
            Redefining Investment with Data & Strategy
          </motion.h1>

          <motion.p
            className="text-[20px] md:text-[2rem] mx-auto max-w-3xl"
            initial={{ x: '100%', opacity: 0 }} // Start off-screen to the right with no opacity
            animate={{ x: '0', opacity: 1 }}    // Move to the normal position with full opacity
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }} // Duration, easing, and delay
          >
            Combining institutional expertise with AI-driven insights to maximize returns.
          </motion.p>

        </div>
        <Link to="/getintouch">
          <Button title="Read more" type="button" className="md:text-[1.25rem]" isWhite={true} icon={<BsArrowRight />} />
        </Link>


      </div>

    </div>
  )
}
