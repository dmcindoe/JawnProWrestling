import React from "react"
import WrestlerCard from "./WrestlerCard"

const WrestlerList = ({wrestler}) => {
  const wrestlerCards = wrestler.map((worker) => (
    <div>
        <WrestlerCard 
       key={worker.id}
       wrestler={worker}
       />
    </div>
))

return <div id="worker-collection">{wrestlerCards}</div>;
  }
export default WrestlerList
