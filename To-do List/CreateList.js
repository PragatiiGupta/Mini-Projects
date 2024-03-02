import React, { useState } from 'react';

const CreateList = () => {

  const [input, setInput] = useState("");  
  const [output, setOutput] = useState([]);

  const handleAddClick = () => {
    setOutput([...output,input]);
    setInput("");
  } ; 
  return (
    <div class="container">
          <div class="main">
        <h4 id="header">To do list</h4>
        <input type="text" value={input} id="input" onChange={(e)=>{
            setInput(e.target.value);
        }}></input>

        <div class="buttons">
        <button id="remove">-</button>
        <button id="clear" onClick={()=>{
            setInput("");
            setOutput([]);
        }}>Clear List</button>
        <button id="add" onClick={handleAddClick}>+</button>
        </div>
        </div>
        <textarea id="output" value={output.join('\n')} disabled></textarea>
        </div>
  )
}

export default CreateList;