import { NavLink } from "react-router"

function Logo() {
  return (
    <div>
      <NavLink to="/home">
      <img src="/logo.svg" alt="Logo" className="h-8 w-13" />
    </NavLink></div>
  )
}

export default Logo