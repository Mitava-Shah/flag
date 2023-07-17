import './App.css';
import data from "./data.jsx"
import React, {useState} from "react"

function App() {
 

const [swich,setSwich]=useState(false);
    return(
        <>
       <nav class="navbar"><p class="nav-sen">Where is the world?</p> 
       <div className='button'>
       <div className="form-check form-switch" onClick={()=>{setSwich(!swich)}}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" forHTML="flexSwitchCheckDefault">{swich?"Light Mode":"Dark Mode"}</label>
</div>
        </div>
 
</nav>
        <div className={`${swich?"dark":"white"}`}>
      {data.map((a)=>(
    <div className='box'>
            <div className="image">
                <img src={a.flags['png']} alt="" />
            </div>
        <h2>{a.name['common']}</h2>
        <p>Population:{a.population}</p>
        <p>Region:{a.region}</p>

        <p>Capital:{a.capital}</p>
    </div>
    
      ))}
      
        </div>
        </>
        
);}
export default App;
