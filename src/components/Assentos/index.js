import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';


export default function Assentos({isAvailable, name}) {
  const [disponivel, setDisponivel] = useState(isAvailable);

  
  function isDisponivel(assento){
    console.log(assento)
    if(assento === false){
      setDisponivel(false);
      
    }else{
      setDisponivel(true);
    }
  }

    console.log(disponivel)
    
  return (
    <Assento Disponivel = {isAvailable} onClick={()=>isDisponivel(isAvailable)} >{name}</Assento>
  )
}

const Assento = styled.div`
      
background-color: ${({Disponivel}) => Disponivel ? '#C3CFD9' : '#FBE192'};


width: 26px;
height: 26px;

display: flex;
align-items: center;
justify-content: center;

border-radius: 50px;

`