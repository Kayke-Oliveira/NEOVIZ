// src/components/Header.jsx  (substitua o seu index.js atual por este arquivo)
import './header.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Header({ onGoTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // se abrir o menu, bloqueia scroll do body
    document.body.classList.toggle('no-scroll', !menuOpen);
  };

  const safeGo = (id) => {
    if (typeof onGoTo === 'function') onGoTo(id);
    else console.warn('Header: onGoTo não foi passado (ou não é função). id:', id);
    // fechar menu mobile se estiver aberto
    if (menuOpen) toggleMenu();
  };

  return (
    <header>
      <a className='logo' href="#home" onClick={() => safeGo('home')}>NEO<span>VIZ</span></a>

      {/* Menu Desktop */}
      <nav className='menu-desktop'>
        <button onClick={() => safeGo('home')} className='botao-header'>Início</button>
        <button onClick={() => safeGo('servicos')} className='botao-header'>Serviços</button>
        <button onClick={() => safeGo('quemsomos')} className='botao-header'>Sobre</button>
        <button onClick={() => safeGo('projetos')} className='botao-header'>Projetos</button>
        <button onClick={() => safeGo('contato')} className='botao-header'>Contato</button>
      </nav>

      {/* Ícone de menu mobile */}
      <div className='menu-icon' onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={26} color="#fff" /> : <FaBars size={26} color="#fff" />}
      </div>

      {/* Menu mobile lateral */}
      <div className={`menu-mobile ${menuOpen ? 'ativo' : ''}`}>
        <nav>
          <ul>
            <li><button onClick={() => safeGo('home')} className='botao-header'>Início</button></li>
            <li><button onClick={() => safeGo('servicos')} className='botao-header'>Serviços</button></li>
            <li><button onClick={() => safeGo('quemsomos')} className='botao-header'>Quem Somos</button></li>
            <li><button onClick={() => safeGo('projetos')} className='botao-header'>Projetos</button></li>
            <li><button onClick={() => safeGo('comentarios')} className='botao-header'>Comentários</button></li>
            <li><button onClick={() => safeGo('contato')} className='botao-header'>Contato</button></li>
          </ul>
        </nav>
      </div>

      {/* Overlay escuro */}
      <div
        className={`overlay-menu ${menuOpen ? 'ativo' : ''}`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
}

export default Header;
