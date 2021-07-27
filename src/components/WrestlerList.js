import React from "react"
import WrestlerCard from "./WrestlerCard"
import { Card } from "semantic-ui-react"

const WrestlerList = ({wrestler, onUpdateLikeButton}) => {
  const wrestlerCards = wrestler.map((worker) => (
    <div>
        <WrestlerCard variant="outlined"
       key={worker.id}
       wrestler={worker}
       onUpdateLikeButton={onUpdateLikeButton}
       />
    </div>
))

return ( 
  <Card.Group itemsPerRow={4} itemsPerColumn={4}>
    {wrestlerCards}
  </Card.Group>
)
  }
export default WrestlerList
