import HeroSectionCard from "../ui/HeroSectionCard"
import { heroSectionData, strategiesData } from "../data/data"
import StrategyCard from "../features/strategies/StrategyCard"

function Strategies() {
  return (
   <section>
      <HeroSectionCard data={heroSectionData.strategies} />
      <div className="w-full">
      {strategiesData.map((strategy, index) => (
          <StrategyCard
            key={index}
            title={strategy.title}
            description={strategy.description}
            image={strategy.image}
            reverse={index % 2 == 0}
            index={index} // Alternates layout direction
          />
        ))}

      </div>
    </section>
  )
}

export default Strategies