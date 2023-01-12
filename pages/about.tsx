import React from 'react'
import styles from '../styles/Home.module.css'

function about() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Nour Samkough</h1>
        <p className={styles.homelink}>I&apos;m a 20 year old from north jersey. I&apos;m trying to learn front end webdev. I can solve a rubik&apos;s cube in under 20 seconds</p>
    </div>
  )
}

export default about