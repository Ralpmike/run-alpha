import Logo from "../ui/Logo"
import { Link } from "react-router"
import { navLinksItems } from "../data/data"
import {socials} from "../data/data"

function Footer() {
  return (
    <footer className="px-4  lg:px-30 py-12 md:py-28 bg-[#162425] h-auto md:h-[500px] md:text-[18.5px]">
    <div className="flex">
      <div className="w-full text-white flex flex-col md:flex-row justify-between gap-8 mx-auto  font-medium ">

      <Logo className={"min-w-25 h-32 w-31 grow "} src="/logo.png"/>

      <ul className="flex gap-4 flex-col">
       {
        navLinksItems.map((link) => (
          <li key={link.name}>
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))
       }
      </ul>


      <ul className="flex gap-6 flex-col">
       {
         socials.map((link) => (
          <li key={link.name}>
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))
      }
      </ul>

      <address>15, Jakande Estate, Ikeja <br />
         Lagos, Nigeria</address>

        <p>
          Email <br />
          <a href="mailto:info@example.com">info@example.com</a> <br />
          Phone <br />
          +234 567 890 1234 <br />
          
          Mon-Fri 9:00 AM - 5:00 PM <br />
          Saturday 10:00 AM - 3:00 PM <br />
          <br />
        </p>
      </div>
      
    </div>
    <div className="text-center my-12 text-white">
        <p> © 2023 Run Alpha. All rights reserved. </p>
      </div>
    </footer>
  )
}

export default Footer