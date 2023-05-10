import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ProjectLink from '../components/ProjectLink'



export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Projects</div>
      <Link className={styles.link} href={'/projects/pokedex'}>Pokedex</Link>
      <Link className={styles.link} href={'/projects/2048'}>2048</Link>
      <Link className={styles.link} href={'/projects/nourmap'}>Nourmaps</Link>
    </div>
  )
}
