import React, { useState,useEffect } from 'react'
import  { useNavigate }  from 'react-router-dom';
import VeiculosCard from './VeiculosCard'
import { Link } from "react-router-dom";
import axios from 'axios'
import '../viagens/fretes.css'

function Fretes({token}) {
  const [data,setData]=useState()
  const [freteDetails,setFreteDetails]=useState(
    {origem: '',destino: '',data_entrega:'',cargas:[],veiculos:[]})
  const navigate= useNavigate()
  
  useEffect(()=>{
    const header= {
      Authorization: token
    }
    axios.get('http://localhost:3000/viagem/consultar',{headers:header})
    .then((res)=>{
    const fretesData=res.data.resposta
    setData(fretesData)
    
    })
    .catch((rej)=>{console.log(rej)}) 
    
  },[])
  function freteDetailsData(item) {
    setFreteDetails(item)
  }
  function handleInputOrigem(e) {
    console.log(e.target.name)
    if(e.target.name==='origem'){
      setFreteDetails((item)=>{return {...item, origem: e.target.value}})
    }
    if(e.target.name==='destino'){
      setFreteDetails((item)=>{return {...item, destino: e.target.value}})
    }
    if(e.target.name==='date'){
      setFreteDetails((item)=>{return {...item, data_entrega: e.target.value}})
    }
    
  }
   function Veiculo({nome,id}) {
    function selecCarga() {
      console.log(id)
    }
    return (
      <div onClick={selecCarga} id='cargaUnic'>
         {nome}
      </div>
    )
  }
  
  console.log(data)
  console.log(freteDetails)
    return (
      <div className="fretesUser">
        <div className='freteUserLeft'>

          {data && data.map((item)=>{
            return <VeiculosCard origem={item.origem} 
            destino={item.destino} 
            data_entrega={item.data_entrega} 
            cargas={item.cargas}
            veiculos={item.veiculosAutorizado}
            idFrete={item.id_frete}
            status={item.status_frete}
            setFreteDetailsData={freteDetailsData}/>
          })}
        </div>
        <div className='freteUserRight'>
           <div>
            <input type="text" name="origem" value={freteDetails.origem} className='inputsDetailsData'
            onChange={handleInputOrigem}/>
            <input type="text" name="destino" value={freteDetails.destino} className='inputsDetailsData'
            onChange={handleInputOrigem}/>
           </div>
           <div>
             <input type="date" name='date' value={freteDetails.data_entrega} className='inputsDetailsData'
             onChange={handleInputOrigem}/>
           </div>
           <div className='arrayDetailsFretes'>
            <div className='labelCargas'>Cargas: </div>{freteDetails.cargas.lenght!==0?
            freteDetails.cargas.map((item)=>{return <Veiculo nome={item.nome} id={item.id}/>})
            :<p>Sem cargas</p>}
           </div>
           <div className='arrayDetailsFretes'>
           <div className='labelCargas'>Veiculos: </div>{freteDetails.veiculos.lenght!==0?freteDetails.veiculos.map((item)=>{return <Veiculo nome={item.nome} id={item.id}/>})
            :<p>Sem Veiculos</p>}
           </div>
           <footer>
            <button className='deletarFreteButton'>Deletar</button>
            <button className='atualizarFreteButton'>Atualizar</button>
           </footer>
        </div>
      </div>
    );
  }
  
  export default Fretes;