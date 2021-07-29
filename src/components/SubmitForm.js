import React, { useState } from "react"
import { Form } from "semantic-ui-react"

const SubmitForm = ({ onAddWorker }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    imageurl: "",
    finisher: "",
    catchphrase: "",
    contacts: ""
  })

  function handleChange (event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newWorker = {
      id: formData.id,
      name: formData.name,
      image: formData.image,
      finisher: formData.finisher,
      catchphrase: formData.catchphrase,
      likes: 0,
      contacts: formData.contacts
    }

    fetch("http://localhost:4000/wrestlers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newWorker)
    })
      .then(r => r.json())
      .then(data => {
        onAddWorker(data)
        setFormData({
          id: "",
          name: "",
          image: "",
          finisher: "",
          catchphrase: "",
          contacts: ""
        })
      })
  }

  return (
    <div className="SubmitWorker">
      <h3 className="SubmitHeader">{"Submit to work for the Jawn, and Let our Fan's Decide"}</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
          fluid label="Name"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          />
          <Form.Input
            fluid label="Image URL"
            placeholder="Image URL"
            name="image"
            onChange={handleChange}
            value={formData.image}
          />
          <Form.Input
            fluid label="Finisher"
            placeholder="Finisher"
            name="finisher"
            onChange={handleChange}
            value={formData.finisher}
          />
          <Form.Input
            fluid label="Catchphrase"
            placeholder="Catchphrase"
            name="catchphrase"
            onChange={handleChange}
            value={formData.catchphrase}
          />
          <Form.Input
            fluid label="Contacts"
            placeholder="Contacts"
            name="contacts"
            onChange={handleChange}
            value={formData.contacts}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default SubmitForm
