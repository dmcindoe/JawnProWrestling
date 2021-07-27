import React from "react"
import WrestlerPage from "./components/WrestlerPage"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Shows from "./components/Shows"
import { Route, Switch } from "react-router-dom"


const App = () => {

  return (
    <div>
    <Navbar />
    <Switch>
      <Route exact path="/About">
        <About />
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
