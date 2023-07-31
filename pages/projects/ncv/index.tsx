import { useEffect, useState } from "react"
import CandidateOption from "../../../components/ncv/ncvCandidateOption"
import AddOptionBox from "../../../components/ncv/ncvAddOptionBox"
import NcvBox from "../../../components/ncv/ncvCandidateList"
import styled from "styled-components"

const Ncv = () => {
    const [candidateList, setCandidateList] = useState<string[]>([])
    const [voterList, setVoterList] = useState<string[]>([])
    const [privacyOption, setPrivacyOption]  = useState<boolean>(false)
    const [votingStage, setVotingStage] = useState<number>(-1)
    const [ballotLists, setBallotLists] = useState<string[][]>([])
    const [currentBallot, setCurrentBallot] = useState<string[]>([])
    const [results, setResults] = useState([])

    const handleNextStage = () =>{
        setVotingStage(votingStage+1)
    } 


    useEffect(()=>{
        if (votingStage == candidateList.length) {
            setBallotLists([...ballotLists, currentBallot])
        } else if (votingStage> 0) {
            setBallotLists([...ballotLists, currentBallot])
            let temp = [...candidateList]
            setCurrentBallot(temp)
        } else if(votingStage == -1) {
            setCurrentBallot(candidateList)
        }

        
    },[candidateList, votingStage])

    const quickSort = (arr:any) => {
        if (arr.length <= 1) {
          return arr;
        }
      
        let pivot = arr[0];
        let leftArr:any = [];
        let rightArr:any = [];
      
        for (let i = 1; i < arr.length; i++) {
          if (arr[i][1] < pivot[1]) {
            leftArr.push(arr[i]);
          } else {
            rightArr.push(arr[i]);
          }
        }
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
      };

    useEffect(()=>{
        if(ballotLists.length == voterList.length) {
            let temp:any = []
            for(let i = 0; i<candidateList.length; i++) {
                temp.push([candidateList[i], 0])
            }
            setBallotLists([...ballotLists, currentBallot])
            for(var i = 0; i < ballotLists.length; i++){
                for(var j = 0; j < ballotLists[i].length; j++){
                    for(var z = 0; z < temp.length; z++){
                        if(temp[z][0] == ballotLists[i][j]) {
                            temp[z][1] += (j+1)
                        }
                    }
                }
            }
        var temp2 = quickSort(temp)
        setResults(temp2)
        }
    },[ballotLists])

    const TitleBar = styled.div`
        width: 100%;
        display: inline-block;
        background-color: black;
        color: grey;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-align: center;
        font-size: 50px;
    `
    const PageWrapper = styled.div`
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: #D3D3D3;
        z-index: 1000;
    `
    const ContentFlex = styled.div`
        display:flex;
        text-align: center;
        justify-content: space-evenly;
        align-items: flex-start;
    `
    const VerticalFlex = styled.div`
        display:flex;
        flex-direction:column;   
    `
    const NextButton = styled.div`
        width: 10%;
        background-color: #24a0ed;
        color: black;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        border-color: black;
        border-style: solid;
        border-width: 2px;
        border-radius: 10px;    
        padding: 5px;
    `
    const PrivacySwitch = styled.button`
        width: 6%;
        margin: 10px;
        padding: 5px;
        background-color: ${privacyOption ? "#3ded97" : "red"};
        border-color: black;
        border-style: solid;
        border-width: 2px;
        border-radius: 10px; 
        text-align: center;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.5vh;
    `
    const Result = styled.p`
        display:inline;
        text-align: center;
    `
    

    return (<PageWrapper>
        <TitleBar>NourChoiceVoting</TitleBar>
        {votingStage == -1 ? <>
            <ContentFlex>
                <AddOptionBox currentList={candidateList} setListFunction={setCandidateList} inputPlaceholder={"Enter candidate name..."} />
                <AddOptionBox currentList={voterList} setListFunction={setVoterList} inputPlaceholder={"Enter voter name..."}/>
            </ContentFlex>
            <ContentFlex>
                <NcvBox masterCandidateList={candidateList} setMasterCandidateList={setCandidateList} isModifiable={true} voterName={"Candidates"}/> 
                <NcvBox masterCandidateList={voterList} setMasterCandidateList={setVoterList} isModifiable={true} voterName={"Voters"}/> 
            </ContentFlex>
            <ContentFlex>
                <PrivacySwitch onClick={() => setPrivacyOption(!privacyOption)}>Private?</PrivacySwitch>
            </ContentFlex>
                   
        </>
        :votingStage >= 0 && votingStage != voterList.length ? 
        
        
        <ContentFlex>
            <NcvBox masterCandidateList={currentBallot} setMasterCandidateList={setCurrentBallot} isModifiable={false} voterName={voterList[votingStage]}/>
        </ContentFlex>
        
        
        : <ContentFlex><VerticalFlex>
            <h1>RESULTS</h1>
            {results.map((result, index) => {
                return (<CandidateOption key={index}>{result[0]}, {result[1]} votes</CandidateOption>)
            })}
        </VerticalFlex></ContentFlex>}
        {votingStage < voterList.length &&
        <ContentFlex>
            <NextButton onClick={handleNextStage}>Next stage</NextButton>
        </ContentFlex>
        }
        
    </PageWrapper>)
}

export default Ncv