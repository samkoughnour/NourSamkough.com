import axios from "axios"
import Image from "next/image"
import styles from '../../../styles/pokedex.module.css'

export default function currentPokemon({ pokemon }) {
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ pokemon.id +".png"
    const abilities = pokemon.abilities.map((abilities)=>{
        return(abilities.ability.name)
    })
    return(<div className={styles.detailsPage}>
        <p className={styles.detailsPage}>{pokemon.name}</p>
        <Image loader= {() => imageUrl } unoptimized={true} src={imageUrl} layout="intrinsic" height={250} width={250} placeholder="blur" blurDataURL={imageUrl} alt={pokemon.name}/>
        <p className={styles.detailsPage}>Types: {pokemon?.types.map(({ type })=>{
            return(type.name + " ")
        })}</p>
        <p className={styles.detailsPage}>Abilities: {abilities.map((ability)=>{
            return(ability+", ")
        })}</p>
    </div>)
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export async function getStaticProps({ params }) {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/"+params.currentPokemon)
    const pokemon = res.data
    return {
      props: {pokemon}
    }
  }