import styled from 'styled-components'
import React from 'react'
import Link from 'next/link'

type props = {
    projectTitle:string
    linkHref:string
}
const StyledDiv = styled.div`
        width: 200px;
        height: 200px;
        border-radius: 25px;
        background: #D3D3D3;
        text-align: center;
        line-height: 200px;
    `

function ProjectLink(props:props) {
    
    return (
        <StyledDiv>
            <Link href={props.linkHref}>{props.projectTitle}</Link>
        </StyledDiv>
    )
}

export default ProjectLink