import './App.css';
import {useState} from 'react'
function App() {
  const [fullname, setFullname] = useState("Abdelaziz Feki");
  const [bio, setBio] = useState("Done");
  const [imgSrc, setImgSrc] = useState("My Image");
  const [profession, setProfession] = useState("Sales Development");

  return (
    <div className="App">
      <h2 style={{marginTop:"70px"}}>My name is {fullname}</h2>
    <button className='glow-on-hover' onClick={ () => { setFullname(fullname === "Hamouda Feki" ?   "Abdelaziz Feki" :    "Hamouda Feki") }   } >Full Name</button>
    <br/>
    <h2>Bio : {bio} </h2>
    <button className='glow-on-hover' onClick={ () => { setBio(bio === "Done" ? "Hello World" :"Done") }   } >Show Bio</button>


    <br/>
    <h2>{imgSrc}</h2>
    <button className='glow-on-hover' onClick={ () => {
      setImgSrc(imgSrc === "My Image" ? <img style={{height:"30vh", width:"20vw", borderRadius:"15px"}} src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='motivation' /> : "My Image" )
    }  } >Show Image</button>
    <br/>
    <h2>Profession : {profession} </h2>
    <button className='glow-on-hover' onClick={()=>{setProfession(profession === "Sales Development" ? "Sales Promoter"  :  "Sales Development")}}  >Show Profession</button>
    </div>
  );
}

export default App;
