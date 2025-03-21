import HeroSectionCard from "../ui/HeroSectionCard"
import { heroSectionData } from "../data/data"
import { FaChevronRight } from "react-icons/fa"
import { motion } from "framer-motion"

const AboutUs = () => {
  const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}


const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}
  return (
    <div className="w-full relative bg-[#F3F3F3]">
      <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <HeroSectionCard data={heroSectionData.about} />
            </motion.div>
     

      <div className="2xl:px-56 lg:px-36 px-12 md:py-28 py-28">

        <div className="flex items-center flex-wrap lg:flex-nowrap gap-8 mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="min-w-3/6">
            <h1 className="lg:text-6xl text-3xl font-playfair md:text-5xl mb-8 font-bold">WHO WE ARE</h1>
            <p className="md:text-base tracking-[2] text-base lg:text-[19px] leading-relaxed font-lora">
              We are a forward-thinking hedge fund that leverages decades of experience in global financial markets, blending traditional investment strategies with cutting-edge quantitative models to create a unique approach to wealth management.

              <br />
              <br />
              Our firm&apos;s philosophy revolves around utilizing advanced technology, including artificial intelligence (AI), alongside established investment principles to identify high-value opportunities and mitigate risk, ensuring that our clients experience exceptional returns while maintaining peace of mind in an unpredictable market.
            </p>

             <button className="group hover:bg-secondary font-bold px-3 py-4 mt-8  italic text-sm hover:text-white transition-all duration-300 flex items-center gap-4">
              READ MORE
              <FaChevronRight size={12} className="group-hover:mx-2 transition-all" />
            </button>
          </motion.div>
          <div className="2xl:pl-16 px-0 flex items-center xl:h-[500px]">
            <motion.img src="/office.jpg" alt="" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="object-contain rounded-2xl shadow-lg" />
          </div>
        </div>

        <div className="flex flex-row-reverse items-center justify-center flex-wrap lg:flex-nowrap gap-8 mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="min-w-3/6">
            <p className="md:text-3xl font-playfair uppercase text-xl my-8 "><strong>A Legacy of Expertise</strong></p>
            <p className="md:text-base tracking-[2] text-base lg:text-[19px] leading-relaxed font-lora">
              Our journey began many years ago, when a group of seasoned professionals in the investment world realized that the traditional ways of asset management were no longer sufficient to tackle the growing complexity of global financial markets. With decades of collective experience in hedge funds, investment banking, and global asset management, our team had a deep understanding of market dynamics and recognized the opportunities that advanced quantitative strategies could offer.

              <br />
              <br />

              Our team, composed of financial professionals, data scientists, and experienced quantitative analysts, understands that the financial markets are constantly evolving. In this dynamic environment, it is crucial for investors to adopt innovative approaches and strategies that not only keep pace with the changing landscape but also position them for sustainable, long-term success
            </p>

            <button className="group hover:bg-secondary font-bold px-3 py-4 mt-8 italic text-sm hover:text-white transition-all duration-300 flex items-center gap-4">OUR TEAM

              <FaChevronRight size={12} className="group-hover:mx-2 transition-all"/>
            </button>
          </motion.div>
          <div className="2xl:pr-16 px-0 flex items-center xl:h-[500px]">
            <motion.img src="/people-office-work-day.jpg" alt="" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="object-contain rounded-2xl" />
          </div>
        </div>


        <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-8 mb-16">
         <motion.div 
         initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
         className="min-w-3/6">
            <p className="md:text-3xl text-xl font-playfair uppercase my-8"><strong>Quantitative Strategies</strong></p>

            <p className="md:text-base tracking-[2] text-base lg:text-[19px] leading-relaxed font-lora">
              One of the key pillars of our investment strategy is the use of quantitative methods. These strategies allow us to manage investments with a level of precision that traditional methods simply cannot achieve. By applying mathematical models and algorithms to vast datasets, we are able to identify trends and patterns that may not be immediately apparent to the human eye. This ability to process and analyze large sets of information quickly and accurately allows us to make informed, data-driven decisions in real-time.

              <br />
              <br />

              In addition to machine learning models that help us predict price movements, our team also uses sophisticated risk models to measure and manage potential losses. These tools allow us to assess the risk-reward profile of each investment opportunity and make adjustments as necessary. Whether it&apos;s through automated trading algorithms that execute trades based on pre-determined criteria or utilizing AI to forecast economic shifts, our goal is always the same: to maximize returns while managing risk.
            </p>

            <button className="group hover:bg-secondary font-bold px-3 py-4 mt-8 italic text-sm hover:text-white transition-all duration-300 flex items-center gap-4">STRATEGIES

              <FaChevronRight size={12} className="group-hover:mx-2 transition-all"/>
            </button>
          </motion.div>
          <div className="2xl:pl-16 px-0 flex items-center xl:h-[500px]">
            <motion.img src="/business.jpg" alt="" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="object-contain rounded-2xl" />
          </div>
        </div>

       <div className="flex flex-row-reverse items-center justify-center flex-wrap lg:flex-nowrap gap-8 mb-16">
         <motion.div 
         initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
         className="min-w-3/6">
            <p className="md:text-3xl font-playfair text-xl uppercase my-8"><strong>A Disciplined Approach to Risk Management</strong></p>

        <p className="md:text-base tracking-[2] text-base lg:text-[19px] leading-relaxed font-lora">
          Risk management is an integral part of any investment strategy, and we place a strong emphasis on safeguarding our clients capital. While achieving high returns is important, we believe that managing risk is just as crucial in the pursuit of long-term growth. Our risk management framework is designed to protect against extreme market events and prevent significant losses during periods of high volatility.

        Our approach includes diversification, dynamic hedging, and sophisticated risk modeling to ensure that we can adjust our positions based on changes in market conditions. Additionally, our AI models are equipped with risk mitigation protocols that can automatically adjust portfolios to limit exposure to certain sectors or regions when needed. This combination of human expertise and machine-driven insights allows us to create a robust risk management system that offers our clients confidence, even in times of uncertainty.

        <br />
        <br />

        We also believe in a conservative approach to leverage. While some hedge funds take on significant amounts of leverage to amplify their returns, we believe that using leverage prudently is the key to maintaining long-term stability. By focusing on strategic investments that offer strong risk-adjusted returns, we aim to maximize growth while minimizing unnecessary exposure to potential downside risks.
        </p>
        </motion.div>
         <div className="2xl:pr-16 px-0 flex items-center xl:h-[500px]">
            <motion.img src="/unsplash.jpg" alt=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="object-contain rounded-2xl" />
          </div>

        </div>

      </div>
      </div>
  )
}
export default AboutUs