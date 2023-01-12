import React from 'react'
import GameButtons from './2048GameButtons'
import styles from '../styles/2048.module.css'

function Header({gameAlive, changeSize, restart}) {
  return (
    <div>
        {!gameAlive ? <h1 className={styles.title}>You Lost!</h1> : <h1 className={styles.title}>Nourfourtyeight</h1>}
        <GameButtons function={restart} text={"Start New Game"}/>
        <GameButtons function={() => changeSize(1)} text={"Increase Rows"}/>
        <GameButtons function={() => changeSize(2)} text={"Decrease Rows"}/>
        <GameButtons function={() => changeSize(3)} text={"Increase Columns"}/>
        <GameButtons function={() => changeSize(4)} text={"Decrease Columns"}/>
    </div>
  )
}

export default Header