import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Servicos from "./pages/Servicos/servicos";
import Erro from "./pages/Erro";

import Header from "./components/Header";

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='*' element={ <Erro/> } />
        </Routes>
        <Servicos/>
        
        </BrowserRouter>
    )
}

export default RoutesApp;