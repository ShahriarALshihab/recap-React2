/* eslint-disable no-unused-vars */
 import React, { useState } from 'react'
 
 const App = () => {
const[A, setA]=useState(20); 

const updateValue=()=>{
  
 setA(prevA=> prevA+1); 
}

   return (
    <>
        <div>Value of a is {A}</div>
     <button onClick={updateValue}>Click</button>
    </>
 
   )
 }
 
 export default App