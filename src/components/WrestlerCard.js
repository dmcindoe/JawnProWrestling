import React from "react"

const WrestlerCard = ({ wrestler, onUpdateLikeButton }) => {
  const { id, name, image, finisher, catchphrase, likes } = wrestler

  function handleLikeClick () {
    const updateObj = {
      likes: wrestler.likes + 1
    }

    fetch(`${process.env.REACT_APP_API_URL}/wrestlers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateObj)
    })
      .then((r) => r.json())
      .then(onUpdateLikeButton)
  }

  return (
      <div className="soloCard"
      highlight={
        { position: "side", color: "lightgreen" }}>
        <div className="Card">
          <div className="image">
            <img
            src={image}
            alt={name}
            className="WorkerIcon"
            />
          </div>
          <div>
            <div className="nameheader">{name}</div>
          </div>
          <div className="extra-content">
            <span>
              <button className="icon" onClick={handleLikeClick}>
                Likes {likes}
              </button>
             <p>
              Finsher: {finisher}
             </p>
             <p>
               Catch Phrase: {catchphrase}
            </p>
            </span>
          </div>
        </div>
      </div>
  )
}

export default WrestlerCard
