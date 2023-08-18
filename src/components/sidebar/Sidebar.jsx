import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import  { useNavigate }  from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios'
import './sidebar.css'
import truck from '../../imgs/truck.svg'
import add from '../../imgs/add.svg'
import viagens from '../../imgs/viagens.svg'
import cargas from '../../imgs/cargas.svg'

function Sidebar({DashboardVeicle,DashboardViagens,DashboardPedidos,DashboardCargas}) {
  const [data,setData]=useState()
  const navigate= useNavigate()
  /*
  useEffect(async ()=>{
    
    const header= {
        x_auth_user: token
    }
   const fretes = await axios.get('http://localhost:3000/viagem/consultar',{headers:header})
   const fretesData=fretes.data
   setData(fretesData)
   console.log(data)
   
  
  },[])
  */
  
  const logautUser=()=>{
    navigate('/signin');
    localStorage.clear()
  }
  console.log(data)
    return (
      <div id="Sidebar">
        <div id='logoSidebar'>
          <h3 style={{fontSize:'32px'}}>GO<span style={{color: '#16C79A',fontSize:'28px'}}>frete</span></h3>
        </div>
        <div id='iconsSidebar'>
          <ul id='iconsSidebarRight'>
            <li>
            <img src={truck} alt="" style={{width: '25px', marginLeft: '-25px'}} />
              <button onClick={DashboardVeicle}>Veiculos</button>
            </li>
            <li>
            <img src={cargas} alt="" style={{width: '25px', marginLeft: '-25px'}} />
              <button onClick={DashboardCargas}>Cargas</button>
            </li>
            <li>
            <img src={viagens} alt="" style={{width: '25px', marginLeft: '-25px'}} />
              <button onClick={DashboardViagens}>Viagens</button>
            </li>
            <li>
            <img src={add} alt="" style={{width: '25px', marginLeft: '-25px'}} />
              <button onClick={DashboardPedidos}>Pedidos</button>
            </li>
          </ul>
        <div id='gabSection'></div>
        </div>
        <div id='existSidebar'><button onClick={logautUser} id='exist'>Sair</button></div>
      </div>
    );
  }
  
  export default Sidebar;