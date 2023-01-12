import styled from 'styled-components'
import React from 'react'
import Link from 'next/link'
import styles from '../styles/projects.module.css'

type props = {
    projectTitle:string
    linkHref:string
}

function ProjectLink(props:props) {
    
    return (
        <div className={styles.projectDiv}>
            <Link className={styles.link} href={props.linkHref}>{props.projectTitle}</Link>
        </div>
    )
}

export default ProjectLink