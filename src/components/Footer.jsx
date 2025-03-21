import Logo from "../ui/Logo"
import { Link } from "react-router"
import { navLinksItems } from "../data/data"
import { socials } from "../data/data"
import { MdEmail } from "react-icons/md";
import { FaHome, FaPhoneAlt } from "react-icons/fa";


function Footer() {
  return (
    <footer className="px-4 lg:px-72 py-12 md:py-28 bg-[#162425] h-auto md:h-[500px] md:text-[18.5px] font-lora">
      <div className="flex">
        <div className="w-full text-white flex flex-col md:flex-row justify-between gap-8 mx-auto  font-normal ">

          <Logo className={"min-w-25 h-32 w-31 grow "} src="/logos/white-logo.png" />

          <ul className="flex gap-4 flex-col text-base">
            {
              navLinksItems.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}>{link.name}</Link>
                </li>
              ))
            }
          </ul>


          <ul className="flex gap-6 flex-col text-base">
            {
              socials.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="flex items-center gap-4">
                    <span>{<link.icon size={24} />}</span>
                    <span>{link.name}</span>
                  </Link>
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
        </div>

      </div>
      <div className="text-center my-12 text-white text-sm">
        <p> © 2023 Run Alpha. All rights reserved. </p>
      </div>
    </footer>
  )
}

export default Footer