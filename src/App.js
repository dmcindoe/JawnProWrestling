import React from "react"
import WrestlerPage from "./components/WrestlerPage"
import Navbar from "./components/Navbar"
import { Route, Switch } from "react-router-dom"


const App = () => {

  return (
    <div>
    <Navbar />
    <Switch>
      {/* <Route exact path="/about">
        <About /> */}
      {/* </Route> */}
      <Route exact path="/components/upCommingShows">
        <upCommingShows />
      </Route>
      <Route exact path="/components/WrestlerPage">
        <WrestlerPage />
      </Route>
    </Switch>
  </div>
)
}

export default App
