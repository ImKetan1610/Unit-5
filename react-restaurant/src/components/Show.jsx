import { useEffect, useState } from "react"


export const Show = ({num,rate,type}) => {
    const [ result, setResult ] = useState([]);
    useEffect(()=>{
        async function getData() {
            let res = await fetch("http://localhost:8080/restaurant")
            let data = await res.json();
            setResult(data)
        }
        getData()
    },[]);
    return (
        <div className="grid">
            {result.filter((el)=>(num===0 ? el.ratings >= rate : el.accepts_card!==type)).map((el)=> (
                <div className = "box" key={el.id}>
                    <div className="flex">
                        <div className="img">
                            <img src={el.image} alt="" />
                        </div>
                        <div>
                            <div className="name">{el.name}</div>
                            <div>Cost ₹{el.cost} for one</div>
                            <div>
                                {el.accepts_card === "true" ? "Online Payment ✔" : "Online Payment ✖"}
                            </div>
                        </div>
                        <div className="right">
                            <div className="ratings">{el.ratings}✯</div>
                            <div>{el.votes} votes</div>
                            <div>{el.reviews} reviews</div>
                        </div>
                    </div>
                    <div className="order">
                        <div>Order Online {">"} </div>
                    </div>
                </div>
            ))}
        </div>
    )
}