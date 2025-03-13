import { strategies } from "../../data/data";

const StrategiesHomeSection = () => {
  return (
    <section className="text-center lg:px-30">
      <h2 className="text-2xl font-semibold py-2">Strategies</h2>
      <p className="text-gray-600 py-3">
        Strategic Investing, Powered by Data and Driven by Experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 px-4 ">
        {strategies.map((strategy, index) => (
          <div key={index} className="relative">
            <img
              src={strategy.image}
              alt={strategy.title}
              className=" object-cover rounded-lg w-full"
            />
            <div className="absolute inset-0 flex items-end  bg-opacity-30 p-4 rounded-lg">
              <h3 className="text-white font-semibold text-sm sm:text-lg">{strategy.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategiesHomeSection;
