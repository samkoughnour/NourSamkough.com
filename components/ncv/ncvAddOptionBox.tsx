import { useState } from "react"
import styled from "styled-components"

const AddOptionBox = ({currentList, setListFunction, inputPlaceholder}) =>{

    const [newTitle, setNewTitle] = useState<string>("")


    const handleClick = () =>{
        setListFunction([...currentList, newTitle])
        setNewTitle("")
    }

    const InputBox = styled.input`
        width: 80%;
        background-color: #FFFDD0;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    `

    const AddOptionButton = styled.button`
        width: 80%;
        border-radius: 15%;
        background-color: lightblue;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    `
    const Container = styled.div`
        margin: 20px;
        display: flex;
        width: 20%;
        justify-content: center;
        flex: none;
    `

    return(<Container>
        <input placeholder={inputPlaceholder} value={newTitle} onChange={(e) =>{setNewTitle(e.target.value)}} autoFocus />
        <AddOptionButton onClick={handleClick}>Add new Title</AddOptionButton>
    </Container>)
}

export default AddOptionBox