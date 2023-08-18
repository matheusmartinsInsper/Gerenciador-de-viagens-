import React, { useState,useEffect } from 'react'
import  { useNavigate }  from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios'
import waves from '../imgs/waves.svg'
import icon from '../imgs/start.svg'
import './sign.css'

function Login() {
  const [senha,setSenha]=useState()
  const [email,setEmail]=useState()
  const [userName,setUserName]=useState()
  const [messageError,setMessageError]=useState()
  const [token,setToken]=useState()
  const navite = useNavigate()
  
  
   const handleSenha=(e)=>{
     setSenha(e.target.value)
     
   }
   const handleEmail=(e)=>{
     setEmail(e.target.value)
   }
  
   async function signUser(event) {
    if(email===undefined || senha===undefined) {
      
      const error= {
        message: 'Email e Senha obrigatorio'
      }
      setMessageError(error)
    }
    else{
    event.preventDefault()
    const data={
        email: `${email}`,
        senha: `${senha}`
    }
    
    axios.get('http://localhost:3000/usuario/logar',{params: data})
    .then((res)=>{
    const tokeofuser=res.data.x_auth_user
    const nameOfUser=res.data.nome
   
    localStorage.setItem('toke_user',tokeofuser)
    const rotaDashboard = `/dashboard/${nameOfUser}`
    navite(rotaDashboard)
    })
    .catch((rej)=>{
     console.log(rej.response)
    })  
    }
    
  }

    return (
      <div className='container'>
      <div id='apresentation'> 
      <h3 id='textapresentation'>Registre e monitore <br /> suas viagens</h3>
         <img src={icon} alt="" class='iconsmenu'/>
        <img src={waves} alt="" id='imagApresentation' />
      </div>
      <div id='telalogin'>
      <div id='login'>
      <div>
        <h3>GO<span style={{color: '#16C79A'}}>frete</span></h3>
      </div>
     
      <div class='inputislogin'>
        <ul>
          <li><input type="email" placeholder='email' value = {email} onChange={handleEmail} required /></li>
          <li><input type="password" placeholder='senha' value = {senha} onChange={handleSenha} required /></li>
        </ul>
        
      </div>
      {messageError && <li style={{color: '#FF0000'}}>{messageError.message}</li>}
      <div id='buttonslogin'>
         <button onClick={signUser}>Entrar</button>  
      </div>
     <p id='redrectuser'>Nao possui conta? registre-se <Link to='/signup' style={{color: 'purple'}}>aqui</Link></p>
     </div>  
  </div>
      </div>
    );
  }
  
  export default Login;