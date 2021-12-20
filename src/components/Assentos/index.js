import React from 'react';
import { useEffect , useState } from 'react';
import './style.css'


  const Assentos = ({isAvailable, name, ids, setIds, idSeat}) => {
  const [statusAssento, setstatusAssento] = useState("available")
 
    
  const verificarStatus = () => {
    setstatusAssento(isAvailable ? "available" : "indisponivel")
}
  
  const reservarAssento = () => {
        if(statusAssento === "available"){
          setstatusAssento("selecionado")
          setIds([...ids, {id: Number(idSeat), name: name}])
        } else if(statusAssento === "selecionado"){
          setstatusAssento("available")
          setIds(ids.filter(element => element.ids !== Number(ids))) 
            
        }else{
          alert('Esse assento não está disponível')
        }
    }
    
    
    useEffect(verificarStatus, [isAvailable]);
  return (
    <div className={`assento ${statusAssento}`} onClick={reservarAssento} key={ids}>{name}</div>
    
  )
}
export default Assentos

