import LandingPage from "../components/LandingPage"
import Aboutus from "./AboutUs"
import GetInTouch from "./GetInTouch"
import Strategies from "./Strategies"
import Team from "./Team"

function Home() {
  return (
    <div className="">
      <LandingPage  />
      <Aboutus />
      <Strategies />
      <Team />
      <GetInTouch />
    </div>
  )
}

export default Home