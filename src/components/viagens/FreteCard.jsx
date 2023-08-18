import React, { useState,useEffect } from 'react'
import  { useNavigate }  from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios'
import './fretes.css'

function Frete({idFrete,origem,destino,data_entrega,cargas,veiculos,setFreteDetailsData,status}) {
 
  const [cargasFrete,setCargasFrete]=useState('')
  const [veiculosFrete,setVeiculosFrete]=useState('')
 
  const date_entregaArray=data_entrega.split('T');
  const dateEntrega = date_entregaArray[0];
   useEffect(()=>{

    const cargasNomes = cargas.map((item)=> item.nome)
    const veiculosNomes = veiculos.map((item)=> item.nome)

    const veiculosNomesString=veiculosNomes.join(', ')
    const cargasNomesString =cargasNomes.join(', ')

    setCargasFrete(cargasNomesString)
    setVeiculosFrete(veiculosNomesString)
   },[])
 
   const dataFreteDetails = {
    origem: origem,
    destino: destino,
    data_entrega: dateEntrega,
    id: idFrete,
    cargas: cargas,
    veiculos: veiculos
   }
    return (
      <div className="freteSelect" onClick={()=>{setFreteDetailsData(dataFreteDetails)}}>
        <div id='detailLeftFrete' style={status===null?{backgroundColor:'#16C79A',width:'5px',height:'15vh',borderRadius:'5px 0px 0px 5px'}
        :status==='deletado'?{backgroundColor:'#FF0032',width:'5px',height:'15vh',borderRadius:'5px 0px 0px 5px'}
        :{backgroundColor:'#4942E4',width:'5px',height:'15vh',borderRadius:'5px 0px 0px 5px'}}></div>
        <div className='contentFreteSelect'>
          <p>{origem}</p> 
          <p>{destino}</p>
          <p>{dateEntrega}</p>
          <p>Cargas: {cargasFrete}</p>
          <p>Veiculos: {veiculosFrete}</p>
        </div>
      </div>
    );
  }
  
  export default Frete;