// src/routes.js  (substitua o conteúdo atual)
import React, { useRef } from "react";
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
  const homeRef = useRef(null);
  const servicosRef = useRef(null);
  const quemRef = useRef(null);
  const projetosRef = useRef(null);
  const comentariosRef = useRef(null);
  const contatoRef = useRef(null);

  function scrollToRef(ref) {
    if (!ref?.current) return;
    const top = ref.current.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }

  function onGoTo(id) {
    switch (id) {
      case "home":
        scrollToRef(homeRef);
        break;
      case "servicos":
        scrollToRef(servicosRef);
        break;
      case "quemsomos":
        scrollToRef(quemRef);
        break;
      case "projetos":
        scrollToRef(projetosRef);
        break;
      case "comentarios":
        scrollToRef(comentariosRef);
        break;
      case "contato":
        scrollToRef(contatoRef);
        break;
      default:
        break;
    }
  }

  return (
    <BrowserRouter>
      <Header onGoTo={onGoTo} />

      <main>
        <section ref={homeRef} id="home"><Home /></section>
        <section ref={servicosRef} id="servicos"><Servicos /></section>
        <section ref={quemRef} id="quemsomos"><QuemSomos /></section>
        <section ref={projetosRef} id="projetos"><ProjetosECases /></section>
        <section ref={comentariosRef} id="comentarios"><Comentarios /></section>
        <section ref={contatoRef} id="contato"><Contato /></section>
      </main>
    </BrowserRouter>
  );
}

export default RoutesApp;
