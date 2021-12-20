import { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// import { Container } from './styles';

function TelaSucesso() {
  const[filme, setFilme] = useState();
  const {idFilme} = useParams([]);
  const location = useLocation();
  const dados = location.state;

  useEffect(()=>{
    const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
      promessa.then((resposta)=>
      setFilme(resposta.data));
  },[]);

  
  return (
    <>
    <Selecao> Pedido feito<br></br> com sucesso!</Selecao>
    <Data>
      <Titulo> Filme e sessão</Titulo>
      <TituloFilme>{dados.title}</TituloFilme>
      <DataHora> {dados.date} - {dados.hour}</DataHora>
    </Data>
    <Ingressos>
      <Titulo>Ingressos</Titulo>
      <AssentosReservados>
        <ul>
          {dados.seats.map((assentos)=>
          <li>Assento {assentos.name}</li>
          )}
          
        </ul>
      </AssentosReservados>
    </Ingressos>
    <Dados>
      <Titulo> Comprador</Titulo>
      <NomeComprador>Nome: {dados.buyer.nome}</NomeComprador>
      <Cpf> CPF: {dados.buyer.cpf}</Cpf>
    </Dados>
    <AlinhaBotao>
      <Link to={"/"}>
        <Button>Voltar ao home</Button>
      </Link>
    </AlinhaBotao>
    </>
  );
}

export default TelaSucesso;


const AlinhaBotao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 30px;

`;

const Button = styled.button`
  width: 225px;
    height: 42px;

    background-color: #E8833A;

    border: none;

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    color: white;

    margin: 0 auto;
`;

const Selecao = styled.div`
width: 100%;
height: 110px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;


font-size: 24px;
font-weight: 700;
font-style: normal;

color:#247A6B ;
  
`;
const Data = styled.div`
margin-left: 29px;

`;
const Titulo = styled.div`
font-size: 24px;
font-weight: 700;
font-style: normal;

color: #293845;


`;
const TituloFilme = styled.div`
  font-size: 22px;
font-weight: 400;
font-style: normal;
margin-top: 10px;

`;
const DataHora = styled.div`
  font-size: 22px;
font-weight: 400;
font-style: normal;

`;
const Dados = styled.div`
margin-left: 29px;

`;
const Ingressos = styled.div`
margin-left: 29px;
margin-top: 20px;

`;
const AssentosReservados = styled.div`
 font-size: 22px;
font-weight: 400;
font-style: normal;
margin-top: 10px;
margin-bottom: 20px;

`;
const NomeComprador = styled.div`
  font-size: 22px;
font-weight: 400;
font-style: normal;
margin-top: 10px;

`;
const Cpf = styled.div`
  font-size: 22px;
font-weight: 400;
font-style: normal;


`;