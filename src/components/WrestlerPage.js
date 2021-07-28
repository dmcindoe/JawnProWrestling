import React, {useEffect, useState} from "react"
import WrestlerList from "./WrestlerList"
import SubmitForm from "./SubmitForm"
import { Container } from "semantic-ui-react"


const WrestlerPage = () => {
  const [workerObj, setWorkerObj] = useState([])

  useEffect (() => {
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
    );
      setWorkerObj(UpdatedWorkers);
  }

  
return (
 
  <div className="StarsPage">
    <Container>
      <h1> Jawn Pro Wrestling</h1>
      <WrestlerList 
        wrestler={workerObj}
        onUpdateLikeButton={handleUpdateLikeButton}
    />
    <SubmitForm 
      onAddWorker={handleAddWorker}
    />
    </Container>
  </div>
)
}

export default WrestlerPage