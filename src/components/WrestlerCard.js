import React from "react"
import { Card } from "semantic-ui-react"

const WrestlerCard = ({wrestler}) => {
  const {name, image, finisher, catchphrase, likes} = wrestler

    return (
      <Card>
        <div>
          <div className="image">
            <img src={image} alt={name}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <button className="icon">Likes {likes}</button> 
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