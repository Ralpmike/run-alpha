import Logo from "../ui/Logo"
import { Link } from "react-router"
import { navLinksItems } from "../data/data"
import {socials} from "../data/data"

function Footer() {
  return (
    <footer className="flex px-4  lg:px-30 py-28 bg-[#162425] h-dvh md:h-[500px] text-2xl">
      <div className="w-full text-white flex flex-col md:flex-row justify-between gap-8 mx-auto  font-medium ">

      <Logo className={"min-w-25 h-32 w-31 grow "} src="/logo.png"/>

      <ul className="flex gap-6 flex-col">
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

      <p>12345, Jakande Estate, Ikeja, Lagos, Nigeria</p>
      </div>

    </footer>
  )
}

export default Footer