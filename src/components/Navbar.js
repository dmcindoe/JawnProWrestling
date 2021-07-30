import React from "react"
import { NavLink } from "react-router-dom"

const linkStyles = {
  width: "100px",
  height: "20px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  variant: "white",
  textDecoration: "none",
  color: "green"
}

function Navbar () {
  return (
    <div>
      <NavLink
        to="/Shows"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white"
        }}
      >
       Home and Up and Comming Shows
      </NavLink>
      <NavLink
        to="/WrestlerPage"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white"
        }}
      >
       {"Tomorrow's Stars"}
      </NavLink>
      <NavLink
        to="/SponsorPage"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white"
        }}
      >
        SponsorPage
      </NavLink>
    </div>
  )
}

export default Navbar
