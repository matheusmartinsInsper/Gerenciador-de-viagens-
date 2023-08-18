import icon from '../src/imgs/start.svg'
import waves from '../src/imgs/waves.svg'
import { Link,  } from "react-router-dom";
import React, { useState,useEffect } from 'react'
import './App.css';


function App() {
  return (
    <div className='container'>
    <div id='apresentation'> 
    <h3>Registre e monitore <br />suas viagens</h3>
       <img src={icon} alt="" class='iconsmenu'/>
      <img src={waves} alt="" id='imagApresentation' />
    </div>
    <div id='telalogin'>
    <div id='home'>
    <div>
    <h3>GO<span style={{color: '#16C79A'}}>frete</span></h3>
    </div>
   
    <div class='inputislogin'>
      
      
    </div>
    <div id='buttonslogin'>
       <button id='linklogin'><Link to='/signin' >Sign-IN</Link></button>
       <button id='linklogin'><Link to='/signup'>Sign-UP</Link></button>
    </div>
   </div>  
   </div>
    </div>
  );
}

export default App;
