import React from 'react'
import GameButtons from './2048GameButtons'

function Header({gameAlive, changeSize, restart}) {
  return (
    <div>
        {!gameAlive ? <h1>You Lost!</h1> : <h1>Nourfourtyeight</h1>}
        <GameButtons function={restart} text={"Start New Game"}/>
        <GameButtons function={() => changeSize(1)} text={"Increase Rows"}/>
        <GameButtons function={() => changeSize(2)} text={"Decrease Rows"}/>
        <GameButtons function={() => changeSize(3)} text={"Increase Columns"}/>
        <GameButtons function={() => changeSize(4)} text={"Decrease Columns"}/>
    </div>
  )
}

export default Header