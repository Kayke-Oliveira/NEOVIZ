import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header> 
            <Link className='logo' to="/" > NEOVIZ </Link>
            <Link className='botao-header' to="/"> Início </Link>
            <Link className='botao-header' to="/"> Sobre </Link>
            <Link className='botao-header' to="/"> Projetos </Link>
            <Link className='botao-header' to="/"> Contato </Link>
        </header>
    )
}

export default Header;