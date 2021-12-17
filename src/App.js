import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaHorario from './components/TelaHorario';
import TelaInicio from './components/TelaInicio';
import TelaSessao from './components/TelaSessao';
import TelaSucesso from './components/TelaSucesso';

import Topo from './components/Topo';

function App(){
    return( 
        <BrowserRouter>
            <Topo></Topo>
            <Routes>
                <Route path="/" element={<TelaInicio/>} exact></Route>
                <Route path="/sessoes/:idFilme" element={<TelaHorario/>} ></Route>
                <Route path="/sessoes/:idFilme/assentos/:idSessao" element={<TelaSessao/>}></Route>
                <Route path="/sucesso" element={<TelaSucesso/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;