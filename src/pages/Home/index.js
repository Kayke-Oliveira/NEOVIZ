import { Link } from 'react-router-dom';

import './home.css';

import logo from '../../assets/logo.png';


function Home() {
    return (
        <section id='First'>
            <div className='container-center'>
                <img  src={ logo } className='logo' alt='logo'/>
                <h1> Inovação Digital </h1>
                <h2> <span> Para Pe</span>quenos Negócios  </h2> <br />

                <p> Transformamos ideias em experiências digitais extraordinárias. <strong> Design elegante, tecnologia avançada </strong> e <span> resultados que impactam seu negócio. </span> </p> <br />

                <div className='button-group'>
                    <button className='button-esquerda'> Transformar Meu Negócio →  </button>
                    <button className='button-direita'> Ver Nossos Serviços </button>
                </div>
                <br />

                <div className='resultados'>

                    <p> CONFIANÇA E RESULTADOS </p> <br />
                    <ul>
                        <li> +50 Projetos Entregues </li>
                        <li> 100% Satisfação </li>
                        <li> Design Award Winer </li>
                    </ul>
                </div>

                <div class="mouse-icon">
                    <span class="scroll"></span>
                </div>


            </div>
        </section>
        

    )
}

export default Home;