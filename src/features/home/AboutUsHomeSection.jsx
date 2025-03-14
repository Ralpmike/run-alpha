import { Link } from "react-router"
import Button from "../../ui/button"
import { BsArrowRight } from "react-icons/bs"


function AboutUsHomeSection() {
  return (
    <div className="lg:px-30 px-8 md:py-16 py-6 md:h-[530px] w-full mx-auto text-center md:mb-12 lg:mb-0">
      <h1 className="text-3xl mb-12 font-semibold italic">Who we are</h1>
      <p className="tracking-wider md:text-xl text-base md:leading-loose font-light italic">We are a forward-thinking hedge fund that combines traditional investment expertise with cutting-<br className="md:hidden"/>edge quantitative strategies to deliver exceptional returns. Our team brings decades of experience <br className="md:hidden"/>in global markets, leveraging deep financial knowledge alongside AI-driven models to identify high-<br className="md:hidden"/> value opportunities. With a disciplined approach to risk management and a commitment to long- <br className="md:hidden"/>term growth, we help investors navigate complex market conditions with confidence...</p>

      <Link to="/aboutus">
          <Button title="Read more" type="button" className="md:text-[1.25rem] mt-8 mx-auto" icon={<BsArrowRight />} />
        </Link>
    </div>
  )
}

export default AboutUsHomeSection