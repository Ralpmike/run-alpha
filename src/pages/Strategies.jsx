import HeroSectionCard from "../ui/HeroSectionCard"
import { heroSectionData, strategiesData } from "../data/data"
import StrategyAnimatedCard from "../features/strategies/StrategyAnimatedCard"

function Strategies() {
  return (
    <div className="w-full relative">
      <HeroSectionCard data={heroSectionData.strategies} />
      <div className="w-full">
        {strategiesData.map((strategy, index) => (
          <div key={index} className={`w-full  ${(index + 1) % 2 === 0 ? "bg-gray-100" : ""} py-6 sm:py-12`}>
            <StrategyAnimatedCard
              key={index}
              title={strategy.title}
              description={strategy.description}
              image={strategy.image}
              reverse={index % 2 == 0}
              index={index} // Alternates layout direction
            />
          </div>
        ))}

      </div>
    </div>
  )
}

export default Strategies