import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const changeText = (e) => {setInput(e.target.value);};
  const changeButton=()=>{setItems((oldItems)=>{return [...oldItems, input];});setInput("");};
  const deleteItem = (todo) => { setItems( items=> items.filter((_item, i) => i !== todo));
 };

  return (
    <div className="App">
    <div>
    <h1>Todo List</h1>
    <input type="text" onChange={changeText} value={input} />
    &nbsp;
    <button onClick={changeButton}>Add Task</button>
    <ol style={{ listStyle: "none" }}>
      {items.map((value, ind) => {
        return (
          <div key={ind} style={{ display: "flex" }}>
            <button onClick={() => deleteItem(ind)}>Delete Task</button>&nbsp;
            <li id={ind}>{value}</li>
          </div>
        );
      })}
    </ol>
  </div>
</div>
 );
}

export default App;