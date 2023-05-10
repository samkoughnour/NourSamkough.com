import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

function about() {
  return (
    <div className={styles.aboutContainer}>
        <Image className={styles.portrait} alt='image of nour' src="/../public/AboutmePortrait.png" width={300} height= {300} />
        <p className={styles.text}>I&apos;m a 20 year old self taught Web Developer living in New Jersey.</p>
    </div>
  )
}

export default about