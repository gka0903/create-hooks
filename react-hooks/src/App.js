import logo from './logo.svg';
import './App.css';
import React ,{ useState } from 'react'

function App() {
  const [item, setItem] = useState(1);
  return (
    <div className="App">
      <h1>{item}</h1>
      <button onClick={() => setItem(item + 1)}>+</button>
      <button onClick={() => setItem(item - 1)}>-</button>
    </div>
  );
}

export default App;
