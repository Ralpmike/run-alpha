import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "../components/Footer"
import CustomCursor from "./CustomCursor"

function Applayout() {
  return (
    <div className="mx-auto grid grid-cols-[auto] grid-rows-[auto,1fr]">
      <CustomCursor />
      <Navbar/>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Applayout