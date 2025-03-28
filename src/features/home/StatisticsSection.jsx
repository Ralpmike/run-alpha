import { motion } from "framer-motion"
import CountUp from "react-countup"
import { FaNairaSign } from "react-icons/fa6"

const StatisticsSection = () => {
  
  return (
    <div className="md:h-[625px] flex flex-col md:flex-row justify-center lg:gap-48 gap-8 px-8 lg:p-32 py-28 items-center font-quicksand h-screen text-alpha bg-gray-100 max-w-screen">
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-4 text-center mt-24 md:mt-0 md:text-start">
        <p className="md:text-xl">Est. since</p>
        <h1 className="text-2xl md:text-6xl  font-bold">2021</h1>
        <p className="text-sm md:text-base max-w-xs">Founded in 2021, we have crafted winning investing strategies which have demonstrated resilience and adaptability across market cycles and attracted a diverse group of high-net-worth individuals.</p>
      </motion.div>
      <div className="h-full bg-alpha w-[1px]"/>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-12">
        <div className="text-center">
          <h1 className="text-2xl flex justify-center md:text-4xl font-bold">
            <FaNairaSign />
            <CountUp start={0} end={1.50} duration={2.5} decimals={2} />bn
          </h1>
          <p className="md:text-lg">Assets under Management</p>
        </div>
        <div className="text-center">
         <h1 className="text-2xl md:text-4xl font-bold">
            <CountUp start={1} end={95} duration={2.5} />%
          </h1>
          <p className="md:text-lg">Client Retention Rate</p>
        </div>
        <div className="text-center">
         <h1 className="text-2xl md:text-4xl font-bold">
            <CountUp start={1} end={6} duration={2.5} />
          </h1>
          <p className="md:text-lg">Experienced team</p>
        </div>
        <div className="text-center mb-24 sm:mb-0">
         <h1 className="text-2xl md:text-4xl font-bold">
            <CountUp start={1} end={36} duration={2.5} />
          </h1>
           <p className="md:text-lg">Years cumulative experience </p>
        </div>
      </motion.div>
    </div>
  )
}
export default StatisticsSection