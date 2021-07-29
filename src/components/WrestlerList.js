import React from "react"
import WrestlerCard from "./WrestlerCard"



const WrestlerList = ({wrestler, onUpdateLikeButton}) => {
  const wrestlerCards = wrestler.map((worker) => (
    <div className="NewTalentCards">
      <WrestlerCard variant="outlined"
        key={worker.id}
        wrestler={worker}
        onUpdateLikeButton={onUpdateLikeButton}
       />
    </div>
))

return (
  <div className="container" >
    {wrestlerCards}
  </div>
  )}

  
export default WrestlerList
