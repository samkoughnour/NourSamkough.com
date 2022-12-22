import React, { useState, MouseEvent } from 'react'
import axios, { AxiosResponse } from 'axios'

interface AppProps {
  addLocation: React.MouseEventHandler
}

const Placefinder = (props: AppProps) => {
  const [searchbarValue, setSearchbarValue] = useState('')
  const [searchResults, setSearchResults] = useState([
    { description: 'Not a location' },
  ])
  const [searchResultsAvailable, setSearchResultsAvailable] = useState(false)

  const buttonHandler = async (event: MouseEvent) => {
    event.preventDefault()

    const response = await axios.get(
      `/api/nourmap/autocomplete/${searchbarValue}`,
    )

    setSearchResults(response.data.predictions)
    setSearchResultsAvailable(true)
  }

  return (
    <div>
      <h1>NourMaps</h1>
      <form>
        <input
          onChange={(e) => {
            setSearchbarValue(e.target.value)
          }}
        ></input>
        <button onClick={buttonHandler}>Search Locations</button>
      </form>
      <div>
        {searchResults[0].description !== 'Not a location' &&
          searchResults.map((result, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  props.addLocation(searchResults[index])
                  setSearchbarValue('')
                  setSearchResults([{ description: 'Not a location' }])
                }}
              >
                {result.description}
              </button>
            )
          })}
      </div>
    </div>
  )
}

export default Placefinder
