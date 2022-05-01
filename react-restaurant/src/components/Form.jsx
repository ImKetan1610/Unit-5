import { useState } from "react"

export const Form = () => {
    const [formData,setFormData] = useState({
        name: "",
        accepts_card:"",
        votes:"",
        reviews:"",
        cost:"",
        ratings:"",
        image:""
    })

    const handleChange = (ele) => {
        setFormData({
            ...formData,
            [ele.target.id]: ele.target.value
        })
    }

    const addForm = (ele) => {
        ele.preventDefault()
        fetch("http://localhost:8080/restaurant", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
               "Content-Type": "application/json"
            },
        });
        console.log(formData)
    }

    return (
        <form> 
            <input onChange={handleChange} type = "text" placeholder="Enter Name" id="name"/>
            <select onChange={handleChange} name="accept-card" id="accepts_card">
                <option>Choose one</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <input onChange={handleChange} type="number" id="votes" placeholder="Total Votes" />
            <input onChange={handleChange} type="number" id="reviews" placeholder="Total Reviews" />
            <input onChange={handleChange} type="number" id="cost" placeholder="Add cost" />
            <input onChange={handleChange} type="number" id="ratings" placeholder="Add rating out of 5" />
            <input onChange={handleChange} type="text" id="image" placeholder="Add Image url" />
            <input onClick={addForm} type="submit" />
        </form>
    )
}