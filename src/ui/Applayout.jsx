import { Outlet } from "react-router"
import Navbar from "./Navbar"

function Applayout() {
  return (
    <div className="mx-auto grid grid-cols-[auto] grid-rows-[auto,1fr]">
      <Navbar/>
      <main className="">
        <Outlet />
      </main>
    </div>
  )
}

export default Applayout