import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./style.css";

export default function TelaInicio(){
    const[filmes, setFilmes] = useState([]);

    useEffect(()=> {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

        promessa.then(resposta=> {
            setFilmes(resposta.data)
        });
    }), [];
    

    return(
        <>
        <div className="selecao">
            Selecione o filme
        </div>
        <div className="listaFilmes">
            {filmes.map((filme)=> 
            <div className="filme">
                <img src={filme.posterURL}></img>
            </div> 
            )}
        </div>
    </>
    )
}