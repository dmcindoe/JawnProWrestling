import React from "react"
import WrestlerPage from "./components/WrestlerPage"
import Navbar from "./components/Navbar"
import SponsorPage from "./components/SponsorPage"
import Shows from "./components/Shows"
import { Route, Switch } from "react-router-dom"

const App = () => {
  return (
    <div className="App">
    <Navbar className="Navbar" />
    <Switch>
      <Route exact path="/Shows">
        <Shows />
      </Route>
      <Route exact path="/WrestlerPage">
        <WrestlerPage />
      </Route>
      <Route exact path="/SponsorPage">
        <SponsorPage />
      </Route>
    </Switch>
  </div>
  )
}

export default App
