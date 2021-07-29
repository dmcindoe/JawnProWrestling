import React from "react"
import WrestlerPage from "./components/WrestlerPage"
import Navbar from "./components/Navbar"
import SponsorPage from "./components/SponsorPage"
import Shows from "./components/Shows"
import { Route, Switch } from "react-router-dom"

const App = () => {
  return (
    <div className="App">
    <Navbar />
    <Switch>
      <Route exact path="/SponsorPage">
        <SponsorPage />
      </Route>
      <Route exact path="/Shows">
        <Shows />
      </Route>
      <Route exact path="/WrestlerPage">
        <WrestlerPage />
      </Route>
    </Switch>
  </div>
  )
}

export default App
