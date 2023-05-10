import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  

  return (
    <div className={styles.container}>
      <div className={styles.title}>Nour Samkough</div>
      <div>
        <Link className={styles.link} href={'/about'}>About Me</Link>
        <Link className={styles.link} href={'/projects'}>Projects</Link>
      </div>
    </div>
  )
}
