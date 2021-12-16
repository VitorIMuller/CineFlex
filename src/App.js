import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaHorario from './components/TelaHorario';
import TelaInicio from './components/TelaInicio';

import Topo from './components/Topo';

function App(){
    return( 
        <BrowserRouter>
            <Topo></Topo>
            <Routes>
                <Route path="/" element={<TelaInicio/>} exact></Route>
                <Route path="/sessoes/:idFilme" element={<TelaHorario/>} ></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;