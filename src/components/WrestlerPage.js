import React, {useEffect, useState} from "react"
import WrestlerList from "./WrestlerList"
import SubmitForm from "./SubmitForm"


const WrestlerPage = () => {
  const [workerObj, setWorkerObj] = useState([])

  useEffect (() => {
    fetch("http://localhost:3001/wrestlers")
    .then(r => r.json())
    .then(data => setWorkerObj(data)) 
  }, [])

  const handleAddWorker = (newWorker) => {
    setWorkerObj([...workerObj, newWorker]);
  }

return (
  <div>
    <h1> Jawn Pro Wrestling</h1>
    <WrestlerList />
    <SubmitForm 
      onAddWorker={handleAddWorker}
      />
  </div>
)
}

export default WrestlerPage