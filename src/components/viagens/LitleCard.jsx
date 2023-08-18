import React, { useState,useEffect, useRef } from 'react'
import  { useNavigate }  from 'react-router-dom';
import './fretes.css'

function LitleCard({nome,id,index,array,veiculo,insert}) {
    const [select,setSelect]=useState(false)
    

    function selecCarga(args) { 
        if(!select) {
            insert(veiculo)
            setSelect(!select)
        }else{
            setSelect(!select)
        }
          
        
    }
    
    return (
      <div onClick={()=>{selecCarga()}} id='cargaUnic' 
      style={select===true?{color: 'white',backgroundColor:'#FF0032',opacity:'0.7'}:{color: 'black', backgroundColor:'white'}}>
         {nome}
      </div>
    )
  }
  
export default LitleCard