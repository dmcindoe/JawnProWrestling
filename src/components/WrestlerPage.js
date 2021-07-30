import React, { useEffect, useState } from "react"
import WrestlerList from "./WrestlerList"
import SubmitForm from "./SubmitForm"
import Search from "./Search"

const WrestlerPage = () => {
  const [workerObj, setWorkerObj] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/wrestlers`)
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

  const WrestlerssToDisplay = workerObj.filter((worker) =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (

  <div className="StarsPage">
      <h1 className="header"> {"Jawn Pro Wrestling Star's of Tomorrow"}</h1>
      <h1 className="header"> Search through the potential New Stars Below. Just Enter The Name You Seek</h1>
        <Search
    searchTerm={searchTerm}
    onChangeSearch={setSearchTerm}
     />

      <WrestlerList
        wrestler={WrestlerssToDisplay}
        onUpdateLikeButton={handleUpdateLikeButton}
    />
    <SubmitForm
      onAddWorker={handleAddWorker}
    />
  </div>
  )
}

export default WrestlerPage
