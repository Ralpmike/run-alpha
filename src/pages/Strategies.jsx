import HeroSectionCard from "../ui/HeroSectionCard"
import { heroSectionData, strategiesData } from "../data/data"
import StrategyAnimatedCard from "../features/strategies/StrategyAnimatedCard"

function Strategies() {
  return (
    <div className="w-full relative">
      <HeroSectionCard data={heroSectionData.strategies} />
      <div className="w-full">
        {strategiesData.map((strategy, index) => (
            <StrategyAnimatedCard
              key={index}
              title={strategy.title}
              description={strategy.description}
              image={strategy.image}
              reverse={index % 2 == 0}
              index={index} // Alternates layout direction
            />
        
        ))}

      </div>
    </div>
  )
}

export default Strategies