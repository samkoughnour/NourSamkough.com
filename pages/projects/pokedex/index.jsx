import styles from '../../../styles/pokedex.module.css'
import axios from 'axios'
import PokedexEntry from '../../../components/PokedexEntry'
import { useState, useEffect } from 'react'
import Header from '../../../components/PokedexHeader'

export default function Home(props) {
  const [searchInput, setSearchInput] = useState('')

  function handleChange(event) {
    const input = event.target.value
    setSearchInput(input.toLowerCase())
    console.log(searchInput)
  }

  return (
    <div className={styles.pokedexDiv}>
      <Header />
      <input onChange={(event) => handleChange(event)}></input>
      {props.pokemon
        .filter((poke) => poke.name.startsWith(searchInput))
        .map((filteredPokemon, index) => {
          return (
            <PokedexEntry
              key={index}
              id={filteredPokemon.url.slice(34, filteredPokemon.url.length - 1)}
              pokemonName={filteredPokemon.name}
            />
          )
        })}
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon')

  const pokemon = await res.data.results

  return {
    props: { pokemon },
  }
}
