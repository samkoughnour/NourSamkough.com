import { useEffect, useState } from 'react';
import styles from '../styles/2048.module.css';
import Gameboard from '../components/2048Gameboard';
import Header from '../components/2048Header';


function App() {
  //[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]
  //[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
  const [rows, setRows] = useState(4)
  const [columns, setColumns] = useState(4)

  const generateBoard = (rows, columns) => {
    let newBoard = []
    for(let i = 0; i<rows; i++) {
      newBoard.push([])
      for(let j = 0; j<columns;j++){
        newBoard[i].push(0)
      }
    }
    return(newBoard)
  }
  
  const [initialBoard, setInitialBoard] = useState(generateBoard(rows,columns))
  const [board, setBoard] = useState(initialBoard)
  const [gameAlive, setGameAlive] = useState(true)

  useEffect(()=>{
    setInitialBoard(generateBoard(rows,columns))
  },[rows,columns])

  var transpose = (placeholderBoard) => {

    const result = [];
  
    for (let i = 0; i < placeholderBoard[0].length; i++) {
      const col = []
      for (let j = 0; j < placeholderBoard.length; j++) {
        col.push(placeholderBoard[j][i]);
      }
      result.push(col)
    }
  
    return result
  };

  const detectCollision = (direction, placeholderBoard) =>{
    if(direction === 37){
      for(let i = 0; i< placeholderBoard.length; i++) {
        let last = placeholderBoard[i][0]
        for(let j = 1; j< placeholderBoard[0].length; j++) {
          if (placeholderBoard[i][j] === last) {
            placeholderBoard[i][j-1] = placeholderBoard[i][j-1]*2
            placeholderBoard[i][j] = 0
            last = null
          } else {
            last = placeholderBoard[i][j]
          }
      }}
    } else if(direction === 39){
      for(let i = 0; i< placeholderBoard.length; i++) {
        let last = placeholderBoard[i][placeholderBoard[0].length-1]
        for(let j = placeholderBoard[0].length-2; j> -1; j--) {
          if (placeholderBoard[i][j] === last) {
            placeholderBoard[i][j+1] = placeholderBoard[i][j+1]*2
            placeholderBoard[i][j] = 0

            last = null
          } else {
            last = placeholderBoard[i][j]
          }
        
      }}
    } else if(direction === 38){
      placeholderBoard = placeholderBoard[0].map((_, colIndex) => placeholderBoard.map(row => row[colIndex]));
      for(let i = 0; i< placeholderBoard.length; i++) {
        let last = placeholderBoard[i][0]
        for(let j = 1; j< placeholderBoard[0].length; j++) {
          if (placeholderBoard[i][j] === last) {
            placeholderBoard[i][j-1] = placeholderBoard[i][j-1]*2
            placeholderBoard[i][j] = 0
            last = null
          } else {
            last = placeholderBoard[i][j]
          }
        
      }}
      placeholderBoard = placeholderBoard[0].map((_, colIndex) => placeholderBoard.map(row => row[colIndex]));
    } else if(direction === 40){
      placeholderBoard = placeholderBoard[0].map((_, colIndex) => placeholderBoard.map(row => row[colIndex]));
      for(let i = 0; i< placeholderBoard.length; i++) {
        let last = placeholderBoard[i][placeholderBoard[0].length-1]
        for(let j = placeholderBoard[0].length-2; j> -1; j--) {
          if (placeholderBoard[i][j] === last) {
            placeholderBoard[i][j+1] = placeholderBoard[i][j+1]*2
            placeholderBoard[i][j] = 0
            last = null
          } else {
            last = placeholderBoard[i][j]
          }
        
      }}
      placeholderBoard = placeholderBoard[0].map((_, colIndex) => placeholderBoard.map(row => row[colIndex]));
    }
    return(placeholderBoard)
  }
  
  const checkStill = (placeholderBoard,keyCode) => {
    let zeroCount = 0
    for(let i = 0; i< placeholderBoard.length; i++) {
      for(let j = 0; j< placeholderBoard[0].length; j++) {
        if (placeholderBoard[i][j] === 0) {
          zeroCount++
        } 
    }}
    if(JSON.stringify(placeholderBoard)==JSON.stringify(shiftBoard(keyCode, placeholderBoard)) && zeroCount !== placeholderBoard.length*placeholderBoard[0].length){
      return(true)
    }
  }

  const populate = (placeholderBoard, keyCode) => {
    if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
      const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      }
      let total = placeholderBoard[0].length*placeholderBoard.length
      let positions = []
      let zeroCount = 0
      for(let i = 0; i< placeholderBoard.length; i++) {
        for(let j = 0; j< placeholderBoard[0].length; j++) {
          if (placeholderBoard[i][j] === 0){
            zeroCount++
            positions.push([i,j])
          }
        
      }}
      if (zeroCount === total) {
        let position1 = getRandomInt(total)
        let position2 = getRandomInt(total)
        while(position1 === position2){
          position2 = getRandomInt(total)
        }
        let valueChance1 = getRandomInt(10)
        let valueChance2 = getRandomInt(10)
        if(valueChance1 === 1) {
          placeholderBoard[positions[position1][0]][positions[position1][1]] = 4
        } else{
          placeholderBoard[positions[position1][0]][positions[position1][1]] = 2
        }
        if(valueChance2 === 1) {
          placeholderBoard[positions[position2][0]][positions[position2][1]] = 4
        } else{
          placeholderBoard[positions[position2][0]][positions[position2][1]] = 2
        }
      } else {
        let valueChance = getRandomInt(10)
        let choice = getRandomInt(positions.length)
        if(valueChance === 1) {
          placeholderBoard[positions[choice][0]][positions[choice][1]] = 4
        } else{
          placeholderBoard[positions[choice][0]][positions[choice][1]] = 2
        }
        
      }
      return(placeholderBoard)
    }
  }
  
  const shiftBoard = (direction, placeholderBoard) => {
    if (direction === 37) {

      for(let i = 0; i< placeholderBoard.length; i++) {
        let newRow = []
        let zeroArray = []
        for(let j = 0; j< placeholderBoard[i].length; j++) {
          if (placeholderBoard[i][j] !== 0){
            newRow.push(placeholderBoard[i][j])
          } else {
            zeroArray.push(0)
          }
        }
        placeholderBoard[i] = newRow.concat(zeroArray) 
        
      }
    } else if(direction === 39) {
      for(let i = 0; i< placeholderBoard.length; i++) {
        let newRow = []
        let zeroArray = []
        for(let j = 0; j< placeholderBoard[0].length; j++) {
          if (placeholderBoard[i][j] !== 0){
            newRow.push(placeholderBoard[i][j])
          } else {
            zeroArray.push(0)
          }
        }
        placeholderBoard[i] = zeroArray.concat(newRow)
      }
    } else if(direction === 40) {
      let output = transpose(placeholderBoard.slice(0))
      for(let i = 0; i< output.length; i++) {
        let newRow = []
        let zeroArray = []
        for(let j = 0; j< output[i].length; j++) {
          if (output[i][j] !== 0){
            newRow.push(output[i][j])
          } else {
            zeroArray.push(0)
          }
        }
        output[i] = zeroArray.concat(newRow) 
      }
      placeholderBoard = transpose(output.slice(0));
    } else if(direction === 38) {
      let output = transpose(placeholderBoard.slice(0));
      for(let i = 0; i< output.length; i++) {
        let newRow = []
        let zeroArray = []
        for(let j = 0; j< output[i].length; j++) {
          if (output[i][j] !== 0){
            newRow.push(output[i][j])
          } else {
            zeroArray.push(0)
          }
        }
        output[i] = newRow.concat(zeroArray) 
      }
      placeholderBoard = transpose(output.slice(0));
    }
    return(placeholderBoard)
  }

  const checkAlive = (placeholderBoard) => {
    let zeroCount = 0
    let collisionHappened = false 
    for(let i = 0; i< placeholderBoard.length; i++) {
      for(let j = 0; j< placeholderBoard[0].length; j++) {
        if (placeholderBoard[i][j] === 0) {
          zeroCount++
        } 
    }}
    for(let i = 0; i< placeholderBoard.length; i++) {
      let last = placeholderBoard[i][0]
      for(let j = 1; j< placeholderBoard[0].length; j++) {
        if (placeholderBoard[i][j] === last && last !== 0) {
          collisionHappened = true
        } 
        last = placeholderBoard[i][j]
    }}
    placeholderBoard = placeholderBoard[0].map((_, colIndex) => placeholderBoard.map(row => row[colIndex]));
    for(let i = 0; i< placeholderBoard.length; i++) {
      let last = placeholderBoard[i][0]
      for(let j = 1; j< placeholderBoard[0].length; j++) {
        if (placeholderBoard[i][j] === last && last !== 0) {
          collisionHappened = true
        } 
        last = placeholderBoard[i][j]
    }}
    if(!collisionHappened && zeroCount === 0){
      setGameAlive(false)
    }

  }

  const move = (e) =>{
    if(e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40){
      let placeholderBoard = board.slice(0)
      let still = checkStill(placeholderBoard, e.keyCode)
      placeholderBoard = shiftBoard(e.keyCode, placeholderBoard)
      placeholderBoard = detectCollision(e.keyCode, placeholderBoard)
      placeholderBoard = shiftBoard(e.keyCode, placeholderBoard)
      if (!still){
        placeholderBoard = populate(placeholderBoard, e.keyCode)
      }
      checkAlive(placeholderBoard)
      setBoard(placeholderBoard)
    }
    
  }

  const restart = () =>{
    setBoard(initialBoard)
    setGameAlive(true)
  }

  const changeSize = (id) => {
    if (id === 1) {
      setRows(rows+1)
    } else if(id === 2) {
      setRows(rows - 1)
    } else if(id === 3) {
      setColumns(columns+1)
    } else if(id === 4) {
      setColumns(columns - 1)
    }
  }

  return (
    <div className={styles.App}>
      <div>
        <Header restart={restart} changeSize={changeSize} gameAlive={gameAlive} />
        <Gameboard move = {move} board={board} restart= {restart} gameAlive={gameAlive}/>
      </div>
    </div>
  );
}

export default App;
