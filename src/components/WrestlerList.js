import React from "react"
import WrestlerCard from "./WrestlerCard"
import { Card } from "semantic-ui-react"

const WrestlerList = ({wrestler}) => {
  const wrestlerCards = wrestler.map((worker) => (
    <div>
        <WrestlerCard 
       key={worker.id}
       wrestler={worker}
       />
    </div>
))

return ( 
  <Card.Group itemsPerRow={4}>
    {wrestlerCards}
  </Card.Group>
)
  }
export default WrestlerList
