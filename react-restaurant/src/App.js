// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Show } from './components/Show';

function App() {
  const [num,setNum] = useState(0);
  const [rate,setRate] = useState(0);
  const [type, setType] = useState("");

  const handleButton =(el) =>{
    setRate(el.target.id);
    setNum(0)
  }

  const handleCash = (el) => {
    setType("true");
    setNum(1)
  }

  const handleCard = (el) => {
    setType("false");
    setNum(1)
  }

  const handleAll = (el) => {
    setType("0");
    setNum(1)
  }

  return (
    <div className="App">
      <Form />
      <div>
        <button id="1" onClick={handleButton}>1 Star</button>
        <button id="2" onClick={handleButton}>2 Star</button>
        <button id="3" onClick={handleButton}>3 Star</button>
        <button id="4" onClick={handleButton}>4 Star</button>
        <button id="5" onClick={handleButton}>5 Star</button>
      </div>
      <div>
        <button id="false" onClick={handleCash}>Cash Only</button>
        <button id="true" onClick={handleCard}>Card Only</button>
        <button onClick={handleAll}>All</button>
      </div>
      <Show rate={rate} typr={type} num ={num} />
    </div>
  );
}

export default App;
