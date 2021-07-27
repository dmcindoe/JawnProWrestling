import React from "react"
import { Card } from "semantic-ui-react"

const WrestlerCard = ({wrestler, onUpdateLikeButton}) => {
  const {id, name, image, finisher, catchphrase, likes} = wrestler

  function handleLikeClick() {
    const updateObj = {
      likes: wrestler.likes + 1,
    };

    fetch(`http://localhost:4000/wrestlers/${id}` , {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(onUpdateLikeButton)
  }

    return (
      <Card>
        <div className="content">
          <div className="image">
            <img src={image} alt={name} width="193" height="130" />
          </div>
          <div>
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
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
      </Card>
  
  )
}

export default WrestlerCard