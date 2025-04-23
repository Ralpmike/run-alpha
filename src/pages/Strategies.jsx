import HeroSectionCard from "../ui/HeroSectionCard"
import { heroSectionData, strategiesData, } from "../data/data"
import StrategyAnimatedCard from "../features/strategies/StrategyAnimatedCard"
import SEO from "../components/SEO"

function Strategies() {
  return (
    <div className="w-full relative">
         <SEO
        title="Offerings | Our Offerings"
        description="Explore Run's strategic financial offerings including planning, analysis, and investment guidance tailored for your success."
        url="https://runalpha.co/offerings"
      />
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
              index={index} // Alternates layout
              disclaimerButton={strategy.disclaimerButton} // Show disclaimer button if true
            />

        ))}

      </div>
    </div>
  )
}

export default Strategies
