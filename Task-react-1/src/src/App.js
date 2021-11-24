import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const[count,setCount] = useState(0);
  
  return (
        <div className = "app">
            <h1 className = {(count % 2 == 0) ? "positive" : "negative"}>{count}</h1>
            <h1 className = "textChet">Введено {count % 2 == 0 ? "чётное" : "нечётное"} число!</h1>
            <div className = "button-wrapper">
                <button onClick={()=>setCount(count > 0 ? count-1 : 0)}>-</button>
                <button onClick={()=>setCount(0)}>Reset</button>
                <button onClick={()=>setCount(count+1)}>+</button>
            </div>
        </div>
  );
}

export default App;

