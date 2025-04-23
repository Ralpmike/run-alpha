import LandingPage from "../components/LandingPage"
import StrategiesHomeSection from "../features/home/StrategiesHomeSection"
import AboutUsHomeSection from "../features/home/AboutUsHomeSection"
import StatisticsSection from "../features/home/StatisticsSection"
import GetIntouch from "../features/home/GetIntouch"
import { Helmet } from "react-helmet";
import SEO from "../components/SEO"


function Home() {
  return (
    <div className="">
      <SEO
        title="Run Alpha | Driven by Alpha"
        description="Discover tailored financial strategies and innovative solutions from Run. Navigate the future of finance with confidence and clarity."
        url="https://runalpha.co/"
      />
      <LandingPage  />
      <AboutUsHomeSection />
      <StatisticsSection />
      <StrategiesHomeSection />
      <GetIntouch />
    </div>
  )
}

export default Home
