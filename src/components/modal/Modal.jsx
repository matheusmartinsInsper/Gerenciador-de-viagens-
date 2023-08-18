import './modal.css'
import { useContext, useEffect, useState } from 'react'
import contextModal from '../../context/contextModal'
import axios from 'axios'
function Modal({mensagem,colorHeader,Data,auth}) {
    const [modal,setModal]=useContext(contextModal)
    const [message,setMesssage]=useState('')
    
    const data = {
        id_frete: Data.id
    }
    const header= {
        Authorization: auth
      }
    // useEffect(()=>{
    // console.log(Data.id)
    // console.log(auth)
    // },[])
    function closeModal() {
        setModal(!modal)
    }

    function senDataFromBackend() {
     axios.delete('http://localhost:3000/viagem/delet',{data: data,headers: header})
     .then((res)=>{
        console.log(res)
        setModal(!modal)
     })
     .catch((res)=>{
        console.log(res)
     })
    }
    return (
        <>
        <div id='backgroundModal'>
            <div id='modal'>
                <div style={{width:'450px', height:'50px',backgroundColor:colorHeader,borderRadius:'10px 10px 0px 0px',marginBottom: '20px'}}></div>
                <i class="fa-solid fa-triangle-exclamation" style={{color: '#f19a04', fontSize:'45px'}}></i>
                <section id='contentModal'>
                    <h3>{mensagem}</h3>
                </section>
                <div id='buttonsModal'>
                    <button onClick={closeModal}>Cancelar</button>
                    <button onClick={senDataFromBackend}>Confirmar</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Modal