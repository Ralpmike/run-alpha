import LandingPage from "../components/LandingPage"
import StrategiesHomeSection from "../features/home/StrategiesHomeSection"
import TeamSection from "../features/team/TeamSection"
import Aboutus from "./AboutUs"
// import GetInTouch from "./GetInTouch"
// import Strategies from "./Strategies"
// import Team from "./Team"

function Home() {
  return (
    <div className="">
      <LandingPage  />
      <Aboutus />
      <StrategiesHomeSection />
      {/* <Strategies /> */}
      <TeamSection />
      {/* <Team /> */}
      {/* <GetInTouch /> */}
    </div>
  )
}

export default Home