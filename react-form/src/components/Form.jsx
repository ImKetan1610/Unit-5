import { useState } from 'react';


export const Form = () => {
    const [show, setShow] = useState(false);
    const [table, setTable] = useState([]);
    const [formData, setFormData] = useState({
        name : "",
        age:"",
        address: "",
        department: "",
        salary: "",
        maritalStatus: ""
    })

    const handleChange =(el) => {
        setFormData({
            ...formData,
            [el.target.id]: el.target.value,
          });
    }

    function saveData(e) {
        e.preventDefault();
        fetch("http://localhost:8080/employee", {
          method: "Post",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        async function getData() {
          let res = await fetch("http://localhost:8080/employee");
          let data = await res.json();
          setTable(() => {
            return [...data, formData];
          });
          setShow(true);
        }
        getData();
      }

    return(
    <div>    
        <form>
            Enter name: <input id="name" type="text" placeholder="Enter Name" onChange={handleChange}  /><br />
            Enter Age: <input id="age" type="number" placeholder="Enter Age" onChange={handleChange}  /><br />
            Enter Address:<input id="address" type="text" placeholder="Enter Address" onChange={handleChange}  /><br />
            Department: <select name="department" onChange={handleChange}  id="department">
                <option value="">--Choose department--</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Production">Production</option>
                <option value="Development">Development</option>
            </select><br />
            Salary: <input id="salary" type="number" placeholder="Enter Salary" onChange={handleChange}  /><br />
            Marital Status: <input checked={this} onChange={handleChange} type="checkbox" id="maritalStatus" value="Married" /> Married
            <input checked={this} onChange={handleChange} type="checkbox" id="maritalStatus" value="Single" /> Single<br />
            <input type="Submit" onClick={saveData} />

        </form>

        {show ? (
        <table border="1">
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Marital Status</th>
            </tr>
            </thead>
            {table.map((e) => (
            <tbody>
                <tr>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.address}</td>
                <td>{e.department}</td>
                <td>{e.salary}</td>
                <td>{e.maritalStatus}</td>
                </tr>
            </tbody>
            ))}
        </table>
        ) : null}
    </div>
    )
}