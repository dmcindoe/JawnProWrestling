import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  variant: "dark",
  textDecoration: "none",
  color: "white",
};

function Navbar() {
  return (
    <div>
      <NavLink
        to="/Shows"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
       Home and Up and Comming Shows
      </NavLink>
      <NavLink
        to="/WrestlerPage"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
       Tomorrow's Stars
      </NavLink>
      <NavLink
        to="/SponsorPage"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        SponsorPage
      </NavLink>
    </div>
  );
}

export default Navbar