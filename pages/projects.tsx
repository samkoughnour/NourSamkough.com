import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProjectLink from '../components/ProjectLink'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  `

export default function Projects() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Nour Samkough</title>
      </Head>
      <Title>Nour Samkough</Title>
      <ProjectLink projectTitle="Nour's Pokedex" linkHref='/pokedex'/>
      <ProjectLink projectTitle='Nourfourtyeight' linkHref='/2048'/>
    </div>
  )
}
