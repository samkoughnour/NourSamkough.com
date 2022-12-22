import axios, { AxiosResponse } from 'axios'
import React, { useState } from 'react'
import Placefinder from '../components/nourmaps/Placefinder'
import determineRoute from '../components/nourmaps/determineRoute'

const Nourmap = () => {
  const [locationList, setLocationList] = useState([{}])
  const [isFreshList, setIsFreshList] = useState(true)
  const [distance, setDistance] = useState(0)

  const createApiUrl = (locations: object[]): string => {
    let url = '/api/nourmap/findroute/'
    for (var i = 0; i < locations.length; i++) {
      url = url + locations[i].place_id + '/'
    }
    return url
  }

  const findRoute = async (locations: object[]) => {
    let url = createApiUrl(locations)
    let distancematrix = []
    await axios.get(url).then((response: AxiosResponse) => {
      console.log(response)
      let rows = response.data.rows
      for (var i = 0; i < rows.length; i++) {
        let temp = []
        for (var j = 0; j < rows[i].elements.length; j++) {
          temp.push(rows[i].elements[j].duration.value)
        }
        distancematrix.push(temp)
      }
      setDistance(determineRoute(distancematrix))
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

  return (
    <div>
      <Placefinder addLocation={addLocation} />
      {!isFreshList &&
        locationList.map((location, index) => {
          return <h1 key={index}>{location.description}</h1>
        })}
      <button
        onClick={() => {
          findRoute(locationList)
        }}
      >
        test
      </button>
      <p>{distance}</p>
    </div>
  )
}

export default Nourmap
