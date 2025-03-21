import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "../components/Footer"
import CustomCursor from "./CustomCursor"
import Jump from "./Jump"

function Applayout() {
  return (
    <div className="mx-auto w-full grid grid-cols-[auto] grid-rows-[auto,1fr]">
      <div className="hidden lg:flex">
        <CustomCursor />

      </div>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Jump />
      <Footer />
    </div>
  )
}

export default Applayout