import React from 'react'
import StyledCell from './styleComponents/2048/StyledCell'

function Cell({value}) {
    let colors = ["#F5F5bf", "#f1c179", "#f2b179", "#f59563", "#f67c5f", "#f65e3b", "#edcf72", "#edcc61", "#edc850", "#edc53f", "#edc22e" ]
    let color = colors[Math.log2(value)-1]
    if(value === 0) {
        color = "beige"
    }
  return (
    <StyledCell hexcolor= {color}>
        {value === 0 ? "" : value}
    </StyledCell>
  )
}

export default Cell