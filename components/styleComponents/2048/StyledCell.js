import styled from "styled-components";

const StyledCell = styled.div`
    height: 100px;
    width: 100px;
    text-align: center;
    background: ${props => props.hexcolor};
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    border-radius: 25px ;
    font-size: 25px ;
`

export default StyledCell