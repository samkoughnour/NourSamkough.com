import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/pokedex.module.css'

function PokedexEntry({id , pokemonName}){
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ id +".png"

    return(
            <div className={styles.pokedexDiv}>
                <Image loader= {() => imageUrl } unoptimized={true} src={imageUrl} layout="intrinsic" height={100} width={100} placeholder="blur" blurDataURL={imageUrl} alt={pokemonName}/>
                <Link href={'/pokedex/'+pokemonName}>{pokemonName}</Link>
            </div>
    )
}

export default PokedexEntry