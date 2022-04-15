// import logo from './logo.svg';
import './App.css';

function App() {
  const link = ["Service", "Projects", "About"];
  return (
    <div className="App">
      <div className="Navbar">
        <Logo />
        
        <div className="linkDiv">
          {link.map((ele)=>{
          return <Links linkEle={ele}/>
          })}
        </div>
        
        <Contact />
      </div>
    </div>
  );
}

function Logo(){
  // return logo
  return <p>LOGOBAKERY</p>
}

function Links(props){
  return <a className ="links">{props.linkEle}</a>
};

function Contact(){
  // return logo
  return <button className="contactButton">Contact</button>
};

export default App;
