import { useState } from "react";


export const CounterComponent= () => {
    const [ counter, setCounter] = useState(10)
    
    const handleCounter = (value) => {
    setCounter(counter+value)
    }


    return (
    <div className="App">
        <h2 className={`${ counter%2 === 0 ? `green` : `red`}`}>{counter}</h2>
        <button onClick={()=>{ handleCounter(1) }}>Increase</button>
        <button onClick={()=>{ handleCounter(-1) }}>Decrease</button>
        <button onClick={()=>{ handleCounter(counter) }}>Double</button>
    </div>
    );
}
