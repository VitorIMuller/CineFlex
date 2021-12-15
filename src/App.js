import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaInicio from './components/TelaInicio';
import Topo from './components/Topo';

function App(){
    return(
        <BrowserRouter>
            <Topo></Topo>
            <Routes>
                <Route path="/" element={<TelaInicio/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;