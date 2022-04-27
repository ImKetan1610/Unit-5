import { useEffect, useState } from "react";

export const Counter = () => {
 const [ counter, setCounter ] = useState(0);
//  const [ end, setEnd ] = useState(1);


 useEffect(() => {
     let countDown = setInterval(() => {
         setCounter((prevCount) => {
             if (prevCount + 1 == 60 ) {
                 clearInterval(countDown)
             }
             return prevCount + 1;
         })
     }, 1000)
     return () => {
         clearInterval(countDown);
     }
 }, [])



 return (
     <div>
        <div className="Timer">Timer: {counter} sec </div>
        <hr />
        {/* <input type= "text" className="StopTimer" onChange={(e) => setEnd(e.target.value) } />&nbsp;
        
        <button onClick={handleEnd}>Stop At</button> */}
     </div>
 )
}

