import { Outlet } from "react-router"
import Navbar from "./Navbar"

function Applayout() {
  return (
    <div className=" mx-auto">
      <Navbar/>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Applayout