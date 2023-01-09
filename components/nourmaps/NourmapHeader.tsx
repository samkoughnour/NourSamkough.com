import React from 'react'
import styled from 'styled-components'
import styles from '../../styles/nourmap.module.css'

function NourmapHeader() {

  const NourmapHeader = styled.div`
    background: #4285F4;
    text-align: center;
    padding: 10px;
    font-size: 40px;
    font-family: Montserrat;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  `

  return (
    <NourmapHeader>Nourmap</NourmapHeader>
  )
}

export default NourmapHeader