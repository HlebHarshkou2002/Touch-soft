 import './App.css';

import React, { useState } from "react";
import ReactDOM from "react-dom";

const Input = () => {
  const[count,setCount] = useState(0);
  
  return (
        <div className = "app">
            <h1 className = {(count % 2 == 0) ? "positive" : "negative"}>{count}</h1>
            <h1 className = "textChet">Введено {count % 2 == 0 ? "чётное" : "нечётное"} число!</h1>
            <div className = "button-wrapper">
                <button onClick={()=>setCount(count > 0 ? count-1 : 0)}>-</button>
                <button onClick={()=>setCount(0)}>Reset</button>
                <button onClick={()=>setCount(0)}>Delete</button>
                <button onClick={()=>setCount(count+1)}>+</button>
            </div>
        </div>
  );
}

const App = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div>
      <button onClick={onAddBtnClick} className = "add">Add Count</button>
      <button onClick={onAddBtnClick} className = "reset">Reset</button>
      {inputList}
    </div>
  );
};

//ReactDOM.render(<Form />, document.getElementById("form"));
export default App;

