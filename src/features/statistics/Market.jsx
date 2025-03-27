import CountUp from "react-countup";

const Market = ({ title, count, description }) => {
  return (
    <div className="p-8 space-y-16 bg-alpha md:w-[280px] md:h-[450px] border-4 border-[#ffca28] hover:scale-105 ease-in-out duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill="#ffca28" fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/></svg>
      <div className="space-y-4">
        <p className="text-base">{title}</p>
        <h1 className="text-5xl font-bold">
          <CountUp start={0} end={count} duration={2.5} />
          <span className="text-3xl">years</span>
        </h1>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Market;
