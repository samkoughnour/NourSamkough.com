import styled from "styled-components";
import { useRef, useState } from "react";
import CandidateOption from "./ncvCandidateOption";
const CandidateList = ({masterCandidateList, setMasterCandidateList, isModifiable, voterName}) => {
    const Box = styled.div`
        display: flex;
        flex-direction: column;
        width: 20%;
        border-radius:25px;
        border: 2px;
        border-style: solid;
        border-color: black;
        margin: 10px;
        background-color: #FFFDD0;
        text-align: center;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    `

    const [currentCandidateList, setCurrentCandidateList] = useState(masterCandidateList)

    const dragItem = useRef(0)
    const dragOverItem = useRef(0)

    const dragStart = (e, position) =>{
        dragItem.current = position
    }

    const dragEnter = (e, position) =>{
        dragOverItem.current = position;
    }

    const drop = (e) =>{
        const copyListItems = [...currentCandidateList]
        const dragItemContent = copyListItems[dragItem.current]
        copyListItems.splice(dragItem.current, 1)
        copyListItems.splice(dragOverItem.current, 0, dragItemContent)
        dragItem.current = 0
        dragOverItem.current = 0
        setCurrentCandidateList(copyListItems)
        setMasterCandidateList(copyListItems)
    }

    const DeleteButton = styled.button`
        border-color: black;
        border-style: solid;
        background-color: rgb(255, 0, 0);
        color: white;
        text-align: right;
        border-radius: 10px;
    `
    const handleClick = (index:number) =>{
        let temp = [...masterCandidateList]
        temp.splice(index, 1)
        setMasterCandidateList(temp)
    }

    return (<Box>
        <p>{voterName}</p>
        {currentCandidateList.map((candidate, index) =>{
            return <CandidateOption key= {index} draggable="true" 
            onDragStart={(e) => {dragStart(e, index)}} 
            onDragEnter={(e) => {dragEnter(e, index)}}
            onDragEnd={drop}
            >
                {candidate}
                {isModifiable && <DeleteButton onClick={() => handleClick(index)}> x </DeleteButton>}
                
            </CandidateOption>
        })}
    </Box>

    )
}

export default CandidateList