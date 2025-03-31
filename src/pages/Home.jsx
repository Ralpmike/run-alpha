import LandingPage from "../components/LandingPage"
import StrategiesHomeSection from "../features/home/StrategiesHomeSection"
// import TeamSection from "../features/team/TeamSection"
import AboutUsHomeSection from "../features/home/AboutUsHomeSection"
import StatisticsSection from "../features/home/StatisticsSection"
import GetIntouch from "../features/home/GetIntouch"
// import GetInTouch from "./GetInTouch"
// import Strategies from "./Strategies"
// import Team from "./Team"

function Home() {
  return (
    <div className="">
      <LandingPage  />
      <AboutUsHomeSection />
      <StatisticsSection />
      <StrategiesHomeSection />
      <GetIntouch />
      {/* <Strategies /> */}
      {/* <TeamSection /> */}
      {/* <Team /> */}
      {/* <GetInTouch /> */}
    </div>
  )
}

export default Home