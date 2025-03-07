import classNames from "classnames"
import { NavLink } from "react-router"

// eslint-disable-next-line react/prop-types
function Logo({className, src="/logo.svg"}) {
  return (
    <div>
      <NavLink to="/home" >
      <img src={src} alt="Logo" className={classNames("h-8 w-13 ", className)} />
    </NavLink></div>
  )
}

export default Logo