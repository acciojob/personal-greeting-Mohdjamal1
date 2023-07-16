
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
        <label>Enter your name:</label><br/>
        <input type="text" onChange = {(event)=>setName(event.target.value)} value={name} />
        {name && <h1>Hello {name}!</h1>}
    </div>
  )
}

export default App
