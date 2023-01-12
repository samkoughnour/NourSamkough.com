import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProjectLink from '../components/ProjectLink'



export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nour Samkough</title>
      </Head>
      <h1 className={styles.title}>Projects</h1>
      <ProjectLink projectTitle="Nour's Pokedex" linkHref="projects/pokedex" />
      <ProjectLink projectTitle="Nourfourtyeight" linkHref="projects/2048" />
      <ProjectLink projectTitle='Nourmaps' linkHref='projects/nourmap' />
    </div>
  )
}
