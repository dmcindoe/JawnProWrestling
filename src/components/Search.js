import React from "react"

function Search ({ searchTerm, onChangeSearch }) {
  function handleChange (event) {
    onChangeSearch(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={handleChange} placeholder="Search Here" />
        <i className="search icon" value="search"/>
      </div>
    </div>
  )
}

export default Search
