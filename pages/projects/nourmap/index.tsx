import axios, { AxiosResponse } from 'axios'
import React, { useState } from 'react'
import Placefinder from '../../../components/nourmaps/Placefinder'
import determineRoute from '../../../components/nourmaps/determineRoute'
import styled, {createGlobalStyle} from 'styled-components'
import NourmapHeader from '../../../components/nourmaps/NourmapHeader'
import styles from "../../../styles/nourmap.module.css"


const Nourmap = () => {
  const [locationList, setLocationList] = useState([{}])
  const [isFreshList, setIsFreshList] = useState(true)
  const [displayPathBool, setDisplayPathBool] = useState(false)
  const [bestPath, setBestPath] = useState({length: 0, minpath: [0]})



  const createApiUrl = (locations: object[]): string => {
    let url = '/api/nourmap/findroute/'
    for (var i = 0; i < locations.length; i++) {
      url = url + locations[i].place_id + '/'
    }
    return url
  }

  const findRoute = async (locations: object[]) => {
    let url = createApiUrl(locations)
    let distancematrix:number[][] = []
    await axios.get(url).then((response: AxiosResponse) => {
      let rows = response.data.rows
      for (var i = 0; i < rows.length; i++) {
        let temp = []
        for (var j = 0; j < rows[i].elements.length; j++) {
          temp.push(rows[i].elements[j].duration.value)
        }
        distancematrix.push(temp)
      }
      setBestPath(determineRoute(distancematrix))
      setDisplayPathBool(true)
      console.log(determineRoute(distancematrix))
    })
  }

  const addLocation = (newLocation: object) => {
    console.log(newLocation)
    if (isFreshList) {
      setLocationList([newLocation])
      setIsFreshList(false)
    } else {
      setLocationList((prevValue: object[]) => {
        return [...prevValue, newLocation]
      })
    }
  }

  const StyledLocationTitle = styled.h2`
    font-family: sans-serif;
  `

  const LocationHeader = (): any => {
    return isFreshList
      ? null
      : locationList.map((location, index) => {
          return <h2 key={index}>{location.description}</h2>
        })
  }

  const PathDisplay = ():any =>{
    return displayPathBool
    ? <><p>Total Time: {Math.round(bestPath.length / 60)} minutes</p>
      {bestPath.minpath.map((pathpoint, index) =>{
        const temp = locationList[pathpoint].description
        return <>
        <h2 key={index}>{temp}</h2></>
      })}</>
    : null
  }

  return (
    <div className = {styles.pageStyles}>
      <NourmapHeader />
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <Placefinder addLocation={addLocation} />
          <LocationHeader />
        </div>

        <div className={styles.leftColumn}>
          <button
            className={styles.routebuttonStyling}
            onClick={() => {
              findRoute(locationList)
            }}
          >
            Find Optimal Route
          </button>
          <PathDisplay />
        </div>
      </div>
      
    </div>
  )
}

export default Nourmap
