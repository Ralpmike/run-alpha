import Logo from "../ui/Logo"
import { Link } from "react-router"
import { navLinksItems } from "../data/data"
import { socials } from "../data/data"
import { MdEmail } from "react-icons/md";
import { FaHome, FaPhoneAlt } from "react-icons/fa";


function Footer() {
  return (
    <footer className="px-6 sm:px-12 lg:px-36 py-12 md:py-28 bg-alpha/90 bg-cover bg-center h-auto md:h-[500px] md:text-[18.5px] relative font-quicksand">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/map.jpg')] -z-1" />
      <div className="flex">
        <div className="w-full text-white flex flex-col md:flex-row justify-between gap-8 mx-auto font-normal ">

         <div className="flex flex-col items">
           <Logo className={"min-w-25 grow "} src="/logos/run-logo.png" />
           <p className="text-white text-sm pl-6">Driven by Alpha. Powered by Data</p>
         </div>

          <ul className="flex gap-4 flex-col text-base">
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





          <div className="space-y-4 text-base">
            <p className="flex gap-2 items-center">
              <FaHome size={24} />
              15, Jakande Estate, Ikeja <br />
              Lagos, Nigeria</p>
            <p className="flex gap-2 items-center">
              <MdEmail size={24} />
              <a href="mailto:info@example.com">info@example.com</a>
            </p>

            <p className="flex gap-2 items-center">
              <FaPhoneAlt />
              +234 567 890 1234
            </p>

            <p className="">
              Mon-Fri: 9:00 AM - 5:00 PM <br />
              Saturday: 10:00 AM - 3:00 PM
              <br />
            </p>
          </div>
          <ul className="flex gap-6 flex-col text-base justify-end">
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

      </div>
      <div className="text-center my-12 text-white text-sm">
        <p> © 2025 Run Alpha. All rights reserved. </p>
      </div>
    </footer>
  )
}

export default Footer