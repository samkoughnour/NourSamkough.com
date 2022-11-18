import React from 'react'
import StyledButton from './styleComponents/2048/StyledButton'

const GameButtons = (props) => {
  return (
    <StyledButton onClick={props.function}>
      {props.text}
    </StyledButton>
  )
}

export default GameButtons