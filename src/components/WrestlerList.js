import React from "react"
import WrestlerCard from "./WrestlerCard"

const WrestlerList = ({ wrestler, onUpdateLikeButton }) => {
  const wrestlerCards = wrestler.map((worker) => (
      <WrestlerCard className="NewTalentCards" variant="outlined"
        key={worker.id}
        wrestler={worker}
        onUpdateLikeButton={onUpdateLikeButton}
       />
  ))

  return (
  <div className="container" >
    {wrestlerCards}
  </div>
  )
}

export default WrestlerList
