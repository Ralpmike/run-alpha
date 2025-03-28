import { Link } from "react-router";
import { strategies } from "../../data/data";
import { motion } from "framer-motion";




const StrategiesHomeSection = () => {
  return (
    <section className="text-center bg-alpha pt-32 max-w-screen">
      <h2 className="mb-12 text-3xl capitalize  mx-auto font-semibold py-2 font-quicksand text-white">Business Offerings</h2>
      {/* <p className="text-gray-600 py-3 md:tracking-wider md:text-xl md:leading-loose">
        Strategic Investing, Powered by Data and Driven by Experience.
      </p> */}

     <div className="flex flex-col">
  {strategies.map((strategy, index) => (
    <Link 
      to={`/strategies`}
      key={strategy.id}
    >
    <motion.div
      // to={`/strategies/${strategy.id}`}
      key={index}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.4 }}
      className="relative h-[350px] border-b border-gray-600 group hover:h-[450px] ease-in-out duration-300"
    >
      {/* Image */}
        <div className="absolute top-0 left-0 w-full h-full bg-alpha/30 backdrop-blur-xs  z-5 group-hover:opacity-0 transition-opacity duration-300" />    
          <img
          src={strategy.image}
          alt={strategy.title}
          className="object-cover object-[50%_30%] w-full h-full group-hover:opacity-100 transition-opacity duration-800"
      />
      {/* Title and Icon */}
      <div className="absolute inset-0 flex items-end bg-opacity-30 p-4 z-10 rounded-lg">
        <div
          className="absolute rounded left-0 group-hover:left-[20%] md:group-hover:left-[42%] bg-alpha md:px-16 px-12 py-4 flex gap-8 shadow-2xl transition-all duration-1000 opacity-0 group-hover:opacity-100 group-hover:top-[45%]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="#ffca28" d="m8 16l8-8l8 8l-8 8z"/><path fill="#ffca28" d="M29.39 14.527L17.474 2.609a2.085 2.085 0 0 0-2.946 0L2.609 14.527a2.085 2.085 0 0 0 0 2.946l11.918 11.918a2.085 2.085 0 0 0 2.946 0l11.918-11.918a2.085 2.085 0 0 0 0-2.946M16 28.036L3.965 16L16 3.964L28.036 16Z"/></svg>
          <h3 className="font-semibold text-sm sm:text-base uppercase text-[#ffca28]">
            {strategy.title}
          </h3>
        </div>
      </div>
    </motion.div>
  </Link>
  ))}
</div>

    </section>
  );
};

export default StrategiesHomeSection;
