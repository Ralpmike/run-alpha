import { strategies } from "../../data/data";

const StrategiesHomeSection = () => {
  return (
    <section className="text-center bg-[#F3F3F3] md:px-32 px-6 md:py-16 py-6">
      <h2 className="text-2xl font-semibold py-2">Strategies</h2>
      <p className="text-gray-600 py-3 md:tracking-wider md:text-xl md:leading-loose">
        Strategic Investing, Powered by Data and Driven by Experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-4 ">
        {strategies.map((strategy, index) => (
          <div key={index} className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-lg z-5"/>
            <img
              src={strategy.image}
              alt={strategy.title}
              className=" object-cover rounded-lg w-full h-full"
            />
            <div className="absolute inset-0 flex items-end  bg-opacity-30 p-4 z-10 rounded-lg">
              <h3 className="text-white font-semibold text-sm sm:text-lg">{strategy.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategiesHomeSection;
