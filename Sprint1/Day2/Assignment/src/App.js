// import logo from "./logo.svg";
import "./App.css";

function App() {

  const mobileOS = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const mobileManufacturers = ["Samsung", "HTC", "Micromax", "Apple"]

  return (
    <div className='App'>
      <div className="op_sys">
        <h1>Mobile Opereating System</h1>
        {mobileOS.map((ele)=>{
          return <OpSys sys={ele}/>
        })}

        <h1>Mobile Manufacturers</h1>
        {mobileManufacturers.map((ele)=>{
          return <Manufacturers org = {ele}/>
        })}
      </div>
    </div>
  );

}

function OpSys(props){
  console.log('props:', props)
  return <li>{props.sys}</li>
}

function Manufacturers(props){
  return <li>{props.org}</li>
}

export default App;
