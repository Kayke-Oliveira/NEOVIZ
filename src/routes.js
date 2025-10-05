import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Servicos from "./pages/Servicos/servicos";
import Erro from "./pages/Erro";
import QuemSomos from "./pages/QuemSomos/Index";
import Comentarios from "./pages/Comentarios";
import ProjetosECases from "./pages/Projetos";
import Contato from "./pages/Contato";

import Header from "./components/Header";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Erro />} />
            </Routes>
            <Servicos />
            <QuemSomos />
            <ProjetosECases />
            <Comentarios />
            <Contato />

        </BrowserRouter>
    )
}

export default RoutesApp;