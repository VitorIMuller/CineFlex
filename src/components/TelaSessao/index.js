import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Assentos from '../Assentos';
import './style.css'

export default function TelaHorario(){
    const [sessao, setSessao] = useState([]);
    const {idSessao} = useParams();
    
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
      console.log(sessao)

      

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
                      <input type="text" placeholder='Digite seu nome...' />
                    </div>
                    <div className="input">
                      CPF do comprador:
                      <input type="text" placeholder='Digite seu CPF...' />
                    </div>
                  </div>
                  <div className='alinhabotao'>
                    <Link to={'/sucesso'} nomeFilme={sessao.movie.title} data={sessao.day.date}>
                    <button className="reservaBotao">
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

      