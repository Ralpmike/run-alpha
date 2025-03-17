import { heroSectionData } from "../data/data"
import HeroSectionCard from "../ui/HeroSectionCard"

function Team() {
  return (
  <section>
     <HeroSectionCard data={heroSectionData.teams} />
  </section>
  )
}

export default Team