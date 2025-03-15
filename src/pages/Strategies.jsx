import HeroSectionCard from "../ui/HeroSectionCard"
import { heroSectionData } from "../data/data"

function Strategies() {
  return (
   <section>
      <HeroSectionCard data={heroSectionData.strategies} />
    </section>
  )
}

export default Strategies