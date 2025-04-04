import Logo from "../ui/Logo"
import { Link } from "react-router"
import { navLinksItems } from "../data/data"
import { socials } from "../data/data"



function Footer() {
  return (
    <footer className="px-12 sm:px-8 lg:px-36 py-12 md:py-28 bg-alpha/90 bg-cover bg-center h-auto md:h-fit md:text-[18.5px] relative font-quicksand max-w-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/map.jpg')] -z-1" />
      <Logo className={"md:w-50 md:h-50 mb-6"} src="/logos/run-logo.png" />
      <div className="w-full text-white flex flex-wrap flex-row justify-between gap-8 font-normal items-center">
         
          <div className="space-y-4 text-base flex flex-col">
            <p className="">
              1 Uwa, Close, Off Billings Way, <br /> Oregun Ikeja, <br />
              Lagos, Nigeria</p>
            <div>
              <p className="">
                E: <a href="mailto:hello@runalpha.co">hello@runalpha.co</a>
              </p>

              <p className="">
                TEL: +234 909 371 7972
              </p>
            </div>
          </div>

            <ul className="flex gap-1 flex-col text-base">
          {
            navLinksItems
              .filter(link => link.name !== "Home") // Filter out the "Home" link
              .map((link) => (
                <li key={link.name}>
                  <Link to={link.href}>{link.name}</Link>
                </li>
              ))
          }
        </ul>

        <div className="flex flex-col gap-4 text-base">
          <Link to={`disclaimer`}>
          <p>Disclaimer</p>
          </Link>
         <Link to={`privacy-policy`}>
          <p>Privacy Policy</p>
         </Link>
          
        </div>

        <ul className="flex gap-6 flex-col text-base justify-end justify-self-end h-full items-end">
          {
            socials.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="flex items-center gap-4">
                  <span>{<link.icon size={40} />}</span>
                  {/* <span>{link.name}</span> */}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
        

      <div className="h-full my-12 text-white text-base align-text-bottom">
      <p>© {new Date().getFullYear()} Run Alpha. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer