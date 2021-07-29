import React, { useEffect, useState } from "react"
import WrestlerList from "./WrestlerList"
import SubmitForm from "./SubmitForm"

const WrestlerPage = () => {
  const [workerObj, setWorkerObj] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/wrestlers")
      .then(r => r.json())
      .then(data => setWorkerObj(data))
  }, [])

  const handleAddWorker = (newWorker) => {
    setWorkerObj([...workerObj, newWorker])
  }

  const handleUpdateLikeButton = (updatedLike) => {
    const UpdatedWorkers = workerObj.map((worker) =>
      worker.id === updatedLike.id ? updatedLike : worker
    )
    setWorkerObj(UpdatedWorkers)
  }

  return (

  <div className="StarsPage">
      <h1 className="header"> {"Jawn Pro Wrestling Star's of Tomorrow"}</h1>
      <h1> Comming Soon Book a Show For a Night Contets </h1>
        <h2 className="showDate">Runner ups get to Ring Announce for a Match and be Time Keeper</h2>
          <p>TBA</p>
          <p> TBA</p>

      <WrestlerList
        wrestler={workerObj}
        onUpdateLikeButton={handleUpdateLikeButton}
    />
    <SubmitForm
      onAddWorker={handleAddWorker}
    />
  </div>
  )
}

export default WrestlerPage
