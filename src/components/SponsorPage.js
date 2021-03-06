import React, { useState, useEffect } from "react"

const SponsorPage = () => {
  const dogAPI = "https://dog.ceo/api/breeds/image/random"
  const [dogPic, setDogPic] = useState(null)

  useEffect(() => {
    fetch(dogAPI)
      .then(r => r.json())
      .then(pic => setDogPic(pic.message))
  }, [])

  return (
    <div>
        <h3 className="Sponsor">American Cocktail Club </h3>
            <a className="link" href="https://www.americancocktailclub.com/?gclid=EAIaIQobChMI0u7LwOaF8gIVl-azCh2--QaHEAAYASAAEgICpPD_BwE" target="_blank"rel="noreferrer">
            Click Here...Check Out with the Code Jawn at Checkout for Extra Perks See Below
            </a>
            <p className="SponsorDetails"> Our 1st Sponsor is an at home Cocktail of the month subscription service.<br/>
                Perfect for those looking for a great way to expand their mixology experience at home.<br/>
                This month our partner is offering and extra serving of Watermelon Mojito <br/>
                with our Promo Code of JAWN at checkout.
            </p>
            <img className="SponsorPic" src="https://cdn.filestackcontent.com/auto_image/cache=expiry:max/8IZ8bTOnQ7WAHbDn6QT5" alt="" />
        <p className="SponsorDetails">Warning Must be 21 Years or Older to Enjoy Alcohol and Aways Remember enjoy Responsibly.</p>
        <h3 className="Sponsor">Save Me Animal Rescue </h3>
            <a className="link" href="https://savedme.org/" target="_blank"rel="noreferrer">
            Click Here..Find a Great furry new member of the family to bring Home to the family
            </a>
            <p className="SponsorDetails">  Our Second Sponsor is Savedme.org. They do great work finding great homes for great animals. <br/>
            They make adoption process seemless and have an expert staff on hand.<br/>
            IF your are looking to adopt in the Philadelphia area they are a great place to start.
            </p>
            <img className="SponsorPic" src="https://g.petango.com/photos/1833/77447d5f-35f8-4601-89d3-5dd43de3e9f5.jpg" alt="" />
            <img className="SponsorPic" src="https://g.petango.com/photos/1833/19aa040c-707d-4b73-8b57-6ef0474ee8b5.jpg" alt="" />
            <img className="SponsorPic" src={dogPic} alt="" ></img>
    </div>

  )
}

export default SponsorPage
