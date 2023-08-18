import React, { useState,useEffect,useRef } from 'react'
import  { useNavigate }  from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios'
import waves from '../imgs/waves.svg'
import icon from '../imgs/start.svg'
import './sign.css'

function Signup() {
    const navigate=useNavigate()
    const [dataSignup,setDataSignup]=useState({nome:'',
                                               email:'',
                                               senha: '',
                                               type:''})
    const [messageError,setMessageError]=useState('')                                         
    const refTypeEmpresa=useRef()
    const refTypeMotorista = useRef()
    

    function SignupUser() {
      axios.post('http://localhost:3000/usuario/signup',dataSignup)
      .then((res)=>{
      navigate('/signin')
      })
      .catch((rej)=>{
        console.log(rej.data.mesagem)
      })
    }


    function handleInputNome(e) {
      setDataSignup((item)=>{return {...item, nome: e.target.value}})
    }
    function handleInputEmail(e) {
      setDataSignup((item)=>{return {...item, email: e.target.value}})
    }
    function handleInputPassword(e) {
      setDataSignup((item)=>{return {...item, senha: e.target.value}})
    }
    

    function handleType() {
      
      if(refTypeEmpresa.current.checked){
        setDataSignup((item)=>{return {...item, type:refTypeEmpresa.current.name }}) 
      }else if(!refTypeEmpresa.current.checked){
        setDataSignup((item)=>{return {...item, type:'vazio' }}) 
      }
      
    }


    function handleTypeMotorista() {
      
      if(refTypeMotorista.current.checked){
        setDataSignup((item)=>{return {...item, type:refTypeMotorista.current.name }})
      }else if(!refTypeMotorista.current.checked){
        setDataSignup((item)=>{return {...item, type:'vazio' }}) 
      }
      
    }
    

    return (
      <div className='container'>
        <div id='apresentation'> 
        <h3 id='textapresentation'>Registre e monitore <br />suas viagens</h3>
           <img src={icon} alt="" class='iconsmenu'/>
          <img src={waves} alt="" id='imagApresentation' />
        </div>
        <div id='telalogin'>
        <div id='login'>
        <div>
          <h2>GO<span style={{color: '#16C79A'}}>frete</span></h2>
        </div>
       
        <div class='inputislogin'>
          <ul>
           <li><input type="text" placeholder='Name' 
                onChange={handleInputNome}  name='Name' required /></li>
            <li><input type="text" placeholder='E-mail' 
                onChange={handleInputEmail}  name='E-mail' required/></li>
            <li><input type="text" placeholder='Senha' 
                onChange={handleInputPassword}  name='Senha' required/></li>
          </ul>
          <form action="" id='forms'>
            <div>
              <input type="checkbox" value={dataSignup.type} name='Motorista' 
              ref={refTypeMotorista} 
              onClick={handleTypeMotorista}
              />
              <label htmlFor="">Motorista</label>
            </div>
            <div>
              <input type="checkbox" value={dataSignup.type} name='Empresa' 
              ref={refTypeEmpresa} 
              onClick={handleType}/>
              <label htmlFor="">Empresa</label>
            </div>
          </form>
        </div>
        <div id='buttonslogin'>
           <button onClick={SignupUser}>Sign-UP</button>
        </div>
        <p id='redrectuser'>Já possui conta? entre <Link to='/signin' style={{color: 'purple'} }>aqui</Link></p>
       </div>  
    </div>
        </div>
    );
  }
  
  export default Signup;