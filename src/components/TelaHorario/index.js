import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css'

export default function TelaHorario(){

  const [filme, setFilme] = useState([]);
  const {idFilme} = useParams();
  
  
  useEffect(()=>{
    
    const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
    promessa.then((resposta)=>
    setFilme(resposta.data)
    );
  }, []);
  
  if(filme.length===0){
    return (
      <>
         <p>Carregando... </p>
       </>
     )
    }
    
    return (
<div>

      <div className="selecao">
        Selecione o horário
      </div>
      {filme.days.map((filme)=>
      <div className="horarioFilme">
            <p>{filme.weekday} - {filme.date}</p>
                <div className="listaHorario">
                    {filme.showtimes.map((horario)=>
                    <Link to={`assentos/${horario.id}`}>
                        <div  className="horario">
                            {horario.name}
                        </div>
                    </Link>
              
                      )}
                </div>   
      </div>
      )} 
      <div>
          <div className="rodape">
            <div className="filmeRodape">
              <img src={filme.posterURL}/>
            </div>
            <p>{filme.title}</p>
          </div>
      </div>
</div>
      )
    }
