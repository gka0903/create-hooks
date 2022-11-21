// index.js
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import styled from "styled-components";

function App(){
    const [l, setL] = useState(100)
    const [t, setT] = useState(100)
    const setMouseEnter = () => {
        setL(Math.floor(Math.random() * 500))
        setT(Math.floor(Math.random() * 500))
    }
    return (
        <Box style={{
            position: "absolute",
            top: t,
            left: l
        }} onMouseEnter={setMouseEnter}>
            <h1>30 Days Of React</h1>
        </Box>
        )
}

const Box = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: white;
  background: blue;
`;


export default App;