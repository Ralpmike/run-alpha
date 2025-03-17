import CountUp from "react-countup"

const StatisticsSection = () => {
  return (
    <div className="h-[625px] flex justify-center lg:gap-48 gap-8 lg:p-32 py-28 items-center bg-secondary w-full text-white">
      <div className="space-y-4">
        <h1 className="text-8xl font-bold">1986</h1>
        <p className="px-4 text-xl">Est. since</p>
      </div>
      <div className="h-full bg-white/30 w-[1px]"/>
      <div className="flex flex-col gap-12">
        <div>
          <h1 className="text-4xl font-bold">
            <CountUp start={10} end={1} duration={2.5} separator="," />M+
          </h1>
          <p>AUM</p>
        </div>
        <div>
         <h1 className="text-4xl font-bold">
            <CountUp start={0} end={500} duration={2.5} />+
          </h1>
          <p>employees</p>
        </div>
        <div>
         <h1 className="text-4xl font-bold">
            <CountUp start={0} end={200} duration={2.5} />+
          </h1>
          <p>markets</p>
        </div>
      </div>
      </div>
  )
}
export default StatisticsSection