import React, { useState,useEffect, createContext, useContext } from 'react'
import  { useNavigate }  from 'react-router-dom';
import Fretes from '../components/viagens/Fretes'
//import Veiculos from '../components/veiculos/Veiculos'
import contextModal from '../context/contextModal'
import Modal from '../components/modal/Modal'
import Sidebar from '../components/sidebar/Sidebar'
import { Link } from "react-router-dom";
import axios from 'axios'
import './home.css'

function Home() {
  const [toke,setToken]=useState()
  const [dashboard,setDashboard]=useState('Veiculos')
  const [modal,setModal]=useState(false)
  const [modalDatas,setModalDatas]=useState({
    color: '#16C79A',
    message: 'Deseja excluir essa Viagem?'
  })
  const [dataOfFrete,setDataOfFrete]=useState({})
  const navigate= useNavigate()


  useEffect(()=>{
   const tokenUser=localStorage.getItem('toke_user')
   setToken(tokenUser) 
  },[])


  // const valuesContext={
  //   modalContext: modal,
  //   setModalContext: ()=>{setModal(!modal)}
  // }


  function DashboardVeicle() {
       setDashboard('Veiculos')
  }
  function DashboardViagens() {
    setDashboard('Viagem')
  }
  function DashboardPedidos() {
  setDashboard('Pedidos')
   }
  function DashboardCargas() {
  setDashboard('Cargas')
  }
  console.log(toke)
    return (
      <>
      <contextModal.Provider value={[modal,setModal,modalDatas,setModalDatas,dataOfFrete,setDataOfFrete]}>
      <div className="App">
        <Sidebar DashboardVeicle={DashboardVeicle} DashboardViagens={DashboardViagens} 
        DashboardPedidos={DashboardPedidos} DashboardCargas={DashboardCargas}/>
        <div id='painelUser'>
          <div id='headerPainel'>
            <div>
              <h2>{dashboard}</h2>
            </div>
          </div >
          <main id='contentPainel'>
          {dashboard==='Viagem'?<Fretes token={toke}/>
          :dashboard==='Veiculos'?<h3>Veiculos</h3>
          :dashboard==='Cargas'?<h3>cargas</h3>:<h3>adicionar</h3>}
          </main>
        </div>
      </div>
      {modal&&<Modal mensagem={modalDatas.message} colorHeader={modalDatas.color} Data={dataOfFrete} auth={toke}/>}
      </contextModal.Provider>
      </>
    );
  }
  
  export default Home;