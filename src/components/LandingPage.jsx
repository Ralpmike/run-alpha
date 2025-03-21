import { Link } from "react-router";
import Button from "../ui/button";
import { motion } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";


export default function LandingPage() {
  return (
    <div className="h-[700px] relative lg:h-dvh shadow-2xl">
      <video
        autoPlay
        loop
        muted
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-5"/>
      <div className="flex flex-col items-start lg:px-70 justify-center h-full z-20 text-white gap-6">
        <div className="space-y-3 mt-64 px-6">
          <motion.h1 className="text-[2.4rem] md:text-5xl lg:text-7xl md:max-w-[1300px] leading-[1.2] capitalize max-w-sm w-[600px] font-inter text-start font-extrabold"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '0', opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
          >
            Redefining Investment with Data & Strategy
          </motion.h1>

          <motion.p
            className="text-[16px] md:text-[1.8rem] max-w-3xl font-inter text-start"
            initial={{ x: '100%', opacity: 0 }} // Start off-screen to the right with no opacity
            animate={{ x: '0', opacity: 1 }}    // Move to the normal position with full opacity
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }} // Duration, easing, and delay
          >
            Combining institutional expertise with AI-driven insights to maximize returns.
          </motion.p>

        </div>
        {/* <Link to="/getintouch">
          <Button title="Read more" type="button" className="md:text-[1.25rem]" isWhite={true} icon={<BsChevronRight />} />
        </Link> */}


      </div>

    </div>
  )
}
