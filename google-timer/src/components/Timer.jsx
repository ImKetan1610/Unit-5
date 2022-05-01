import { useEffect, useRef, useState } from 'react';

export const Timer = () => {
    const [ time, setTime ] = useState(0)
    const ref= useRef(null);
    useEffect(() => {
        start()
    },[])

    const start = () => {
        clearInterval(ref.current)
        ref.current = setInterval(()=>{
            setTime((preValue)=>{
                return preValue+1;
            })
        }, 1000);
    }

    const pause = () =>{
        clearInterval(ref.current)
    }

    const stop = () =>{
        setTime(0)
    }


    return (
        <div className='timerDiv'>
            <h1>Timer: {time<10 ? 0+time : time} seconds</h1>
            <button onClick={pause}>⏸️</button>
            <button onClick={stop}>🔃</button>
            <button onClick={start}>▶️</button>
        </div>
    ) 
}