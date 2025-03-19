// eslint-disable-next-line react/prop-types
const StrategyCard = ({ title, description, image, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-6 p-6`}>
      <img src={image} alt={title} className="w-full md:w-1/2 rounded-lg shadow-lg" />
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </div>
  );
};
export default StrategyCard;