import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  function saveItem(event){
    const itemName = event.target.value;
    setItem(itemName);
  }

  function addItem(){
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem(""); // Clear the input after adding an item
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={saveItem} value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         { newItem.map((toDoItem) => <li>{toDoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
