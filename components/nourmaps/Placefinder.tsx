import React, { useState, MouseEvent } from 'react'
import axios, { AxiosResponse } from 'axios'
import styles from '../../styles/nourmap.module.css'

interface AppProps {
  addLocation: React.MouseEventHandler
}

const Placefinder = (props: AppProps) => {
  const [searchbarValue, setSearchbarValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searchResultsAvailable, setSearchResultsAvailable] = useState(false)
  type Location = {
    place_id: string
    description: string
  }

  const buttonHandler = async (event: MouseEvent) => {
    event.preventDefault()

    const response = await axios.get(
      `/api/nourmap/autocomplete/${searchbarValue}`,
    )
    setSearchbarValue("")
    setSearchResults(response.data.predictions)
    setSearchResultsAvailable(true)
  }

  const NourButton = ({ key, onClick, description }: any) => {
    return (
      <button key={key} className={styles.searchresultbuttonStyling} onClick={onClick}>
        {description}
      </button>
    )
  }

  const LocationButtons = (): any => {
    if (searchResults.length === 0) {
      return null
    }

    return searchResults.map((result: Location, index) => {
      return (
        <NourButton
          key={index}
          onClick={() => {
            props.addLocation(searchResults[index])
            setSearchbarValue('')
            setSearchResults([])
          }}
          description={result.description}
        />
      )
    })
  }

  

  return (
    <>
      <form>
        <input
          onChange={(e) => {
            setSearchbarValue(e.target.value)
          }}
          value={searchbarValue}
        />
        <button className= {styles.searchbuttonStyling} onClick={buttonHandler}>Search Locations</button>
      </form>
      <LocationButtons />
    </>
  )
}

export default Placefinder
