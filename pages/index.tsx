import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProjectLink from '../components/ProjectLink'
import styled from 'styled-components'
import Link from 'next/link'

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  `

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Nour Samkough</title>
      </Head>
      <h1 className={styles.title}>Nour Samkough</h1>
      <Link href='/about' className={styles.homelink}>About me</Link>
      <Link href='/projects' className={styles.homelink}>Projects</Link>
      <Link href='/projects' className={styles.homelink}>Something</Link>
      <Link href='/projects' className={styles.homelink}>Something</Link>
    </div>
  )
}
