import React from "react"
import styles from '../styles/pokedexHeader.module.css'

function PokedexHeader({handleChange}){
    return (
    <div className={styles.Header}>
        <h1 className={styles.Header}>Nour&apos;s Pokedex</h1>
    </div>)

}

export default PokedexHeader