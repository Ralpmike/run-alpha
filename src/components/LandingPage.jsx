
import { motion } from "framer-motion";


export default function LandingPage() {
  return (
    
    <div className="h-[500px] relative w-full lg:h-dvh shadow-2xl max-w-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/5224-183786646.mp4" type="video/mp4" />
       
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 -z-5"/>
<div className="absolute top-80 left-55 w-[90px] h-[300px] xl:block hidden -z-1 origin-bottom rotate-0 opacity-80">
  <svg xmlns="http://www.w3.org/2000/svg" width="250" height="570" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'cyan', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'blue', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path fill="url(#gradient1)" d="M19.35 4.8L16.325 0H.115L3.14 4.8zM.115 24h16.21l3.025-4.8H3.14zM6.163 9.6h16.21l1.512 2.4l-1.512 2.4H6.163L7.675 12z"/>
  </svg>
</div>
      <div className="flex flex-col items-start justify-center lg:px-48 h-full z-20 text-white gap-6">
        <div className="space-y-3 px-8 pt-48">
          <motion.h1 className="text-[1.8rem] md:text-5xl lg:text-7xl md:max-w-[1300px] leading-[1.2] max-w-sm w-[600px] font-quicksand font-bold"
            initial={{ y: '50%', opacity: 0 }}
            animate={{ y: '0', opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
          >
           <span className="">Ru</span>n Alpha. 
            Driven by Alpha
          </motion.h1>

          <motion.p
            className="text-[1.8rem] md:text-5xl lg:text-7xl font-quicksand  inline-flex text-white font-semibold "
            initial={{ y: '100%', opacity: 0 }} // Start off-screen to the right with no opacity
            animate={{ y: '0', opacity: 1 }}    // Move to the normal position with full opacity
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }} // Duration, easing, and delay
          >
           Powered by Data
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.8 8.44H6.87V16H4.89V8.44H2V7h7.8zM13.5 7l2.46 6.5L18.41 7H21v9h-2v-2.5l.22-4.26L16.63 16h-1.35L12.7 9.25l.2 4.25V16h-1.97V7z"/></svg>
          </motion.p>

        </div>
      
      
      </div>

    </div>
  )
}
