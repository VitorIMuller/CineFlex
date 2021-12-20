import axios from 'axios';
import { useEffect, useState } from 'react';
import {  Link, useParams,  } from 'react-router-dom';
import styled from 'styled-components';
import Assentos from '../Assentos';
import './style.css'


export default function TelaHorario(){
    const [sessao, setSessao] = useState([]);
    const {idSessao} = useParams();
    const {idFilme} = useParams();
    const [ids, setIds] = useState([]);
    const [nome, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const id = ids.map((e)=> e.id)
    
    useEffect(()=>{
      
      const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`);
      promessa.then((resposta)=>
      setSessao(resposta.data)
      );
    }, []);
    
    
    
    if(sessao.length===0){
      return (
        <>
           <p>Carregando... </p>
         </>
       )
      }
      
      
      
      function sendData(){
        
        const dadoCompra = {
          'ids': id,   
          'name': nome,
          'cpf': cpf.replace(/\D/g, '')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})/, '$1-$2')
          .replace(/(-\d{2})\d+?$/, '$1')
        }
        console.log(dadoCompra)
        const post = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', dadoCompra )
        post.then((sucesso)=>console.log("sucesso"))
        post.catch((erro)=> console.log("erro"))
      }  
      
      const dados = {
                title: sessao.movie.title,
                date: sessao.day.date,
                hour: sessao.name,
                seats: ids,
                buyer: { nome, cpf: cpf}
      }
  
    
      return (
        <div>
              <div className="selecao">
                Selecione o(s) assento(s)
              </div>
              <div className='margin'>

                  <div className="assentos">
                    {sessao.seats.map((assentos)=>
                    <Assentos
                    {...assentos}
                     isAvailable={assentos.isAvailable}
                     name = {assentos.name}
                     ids={ids}
                     setIds={setIds}
                     idSeat={assentos.id}
                    
                    />)}
                  </div>
                  <div className="legendas">
                    <div className="legendaAssento">
                      <div className="assento verde"></div>
                      Selecionado
                    </div>
                    <div className="legendaAssento">
                      <div className="assento disponivel"></div>
                      Disponível
                    </div>
                    <div className="legendaAssento">
                      <div className="assento indisponivel"></div>
                      Indisponível
                    </div>
                  </div>
                  <div className="inputs">
                    <div className="input">
                      Nome do Comprador:
                      <input 
                        placeholder='Digite seu nome...' 
                        onChange = {e => setName(e.target.value)}
                        value = {nome}
                        
                      />
                    </div>
                    <div className="input">
                      CPF comprador: 
                      <input  
                        placeholder='Digite seu CPF...'
                        onChange = {e => setCpf(e.target.value)}
                        value = {cpf}
                        pattern = "[0-9]{11}"
                        
                      />
                    </div>
                  </div>
                  <div className='alinhabotao'>
                    <Link to={`/sucesso/${idFilme}`} state={dados}>
                    <button  onClick={()=> sendData()} className="reservaBotao">
                      Reservar Assento(s)
                    </button>
                    </Link>
                    
                  </div>
              </div>
                      <div className="rodape">
                        <div className="filmeRodape">
                          <img src={sessao.movie.posterURL}/>
                        </div>
                        <div className='descriçãoRodapé'>
                          <p>{sessao.movie.title}</p> 
                          <p>{sessao.day.weekday} - {sessao.name} </p>
                        </div>
                      </div>
                  </div>
        )
      }

      