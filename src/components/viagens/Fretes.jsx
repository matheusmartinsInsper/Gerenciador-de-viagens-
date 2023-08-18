import React, { useState,useEffect, useRef, useContext } from 'react'
import  { useNavigate }  from 'react-router-dom';
import FreteCard from './FreteCard'
import LitleCard from './LitleCard'
import Modal from '../modal/Modal'
import contextModal from '../../context/contextModal'
import { Link } from "react-router-dom";
import axios from 'axios'
import './fretes.css'

function Fretes({token}) {
  const [data,setData]=useState()
  const [freteDetails,setFreteDetails]=useState(
  {origem: '',destino: '',data_entrega:'',cargas:[],veiculos:[]})
  const [modal,setModal,modalDatas,setModalDatas,dataOfFrete,setDataOfFrete]=useContext(contextModal)
  const [arrayVeiculos,setArrayVeiculos]=useState([])
  const navigate= useNavigate()
  const veicleRef=useRef()
  const cargaRef = useRef()
  
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

  function hadleDataDelet() {
    setDataOfFrete(freteDetails)
    setModalDatas({color: '#FF0032',
                   message: 'Deseja Deletar essa viagem?'})
    setModal(!modal)
  }

  function handleUpdate() {
    setModalDatas({color: '#4942E4',
                   message: 'Deseja Atualizar essa viagem?'})
    setModal(!modal)
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

  function insertVeicle(veicle) {
    setArrayVeiculos((item)=>{return [...item,veicle]})
  }
  console.log(arrayVeiculos)
  
  console.log(data)
  console.log(freteDetails)
    return (
      <div className="fretesUser">
        <div className='freteUserLeft'>

          {data && data.map((item)=>{
            return <FreteCard origem={item.origem} 
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
            freteDetails.cargas.map((item,index,array)=>{return <LitleCard nome={item.nome} id={item.id} 
             array={array} veiculo={item} index={index} insert={insertVeicle}/>})
            :<p>Sem cargas</p>}
           </div>
           <div className='arrayDetailsFretes'>
           <div className='labelCargas'>Veiculos: </div>{freteDetails.veiculos.lenght!==0?freteDetails.veiculos.map((item,index,array)=>{
            return <LitleCard nome={item.nome} id={item.id} veiculo={item}  array={array} index={index} insert={insertVeicle}/>})
            :<p>Sem Veiculos</p>}
           </div>
           <footer>
            <button className='deletarFreteButton' onClick={hadleDataDelet}>Deletar</button>
            <button className='atualizarFreteButton' onClick={handleUpdate}>Atualizar</button>
           </footer>
        </div>
      </div>
    );
  }
  
  export default Fretes;