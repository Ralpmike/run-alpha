import HeroSectionCard from "../ui/HeroSectionCard"
import { heroSectionData, strategiesData, } from "../data/data"
import StrategyAnimatedCard from "../features/strategies/StrategyAnimatedCard"

function Strategies() {
  const navigateToDisclaimer = () => {
  window.location.href = "/disclaimer"; // This will redirect the page to /disclaimer
};
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
              services={strategy.services}
              reverse={index % 2 == 0}
              index={index} // Alternates layout direction
            />
        
        ))}

      </div>
    </div>
  )
}

export default Strategies