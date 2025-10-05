
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

import './comentarios.css';

function Comentarios() {
    return (
        <div className='container-center'>
            <h1> O Que Dizem Nossos <span> Clientes </span> </h1>
            <br />
            <h3> A confiança dos nossos clientes é nossa maior conquista. Veja o que empresários falam sobre nossos serviços. </h3>

            <div className='card-container'>

                <div className='card-comentario'>
                    <FaQuoteLeft size={24} color='#facc15' />
                    <p> "A NEOVIZ transformou completamente minha loja online. O design elegante e a funcionalidade impecável triplicaram minhas vendas em apenas 3 meses." </p><br />
                    <br />

                    <div className='container-perfil'>

                        <FaStar size={20} color='#facc15' />
                        <FaStar size={20} color='#facc15' />
                        <FaStar size={20} color='#facc15' />
                        <FaStar size={20} color='#facc15' />
                        <FaStar size={20} color='#facc15' />

                    </div>


                    <div className='foto-perfil'>
                        <img src='' alt='perfil' />
                        <br />
                        <div className='info-perfil'>
                            <h3> Marina Silva </h3>
                            <p> Proprietária • Boutique Elegant </p>
                        </div>

                    </div>



                </div>

                <br />

                <div className='card-comentario'>
                    <FaQuoteLeft size={24} color='#facc15' />
                    <br />
                    <p> "Profissionalismo excepcional! A identidade visual criada pela NEOVIZ elevou nossa marca a outro nível. Recomendo sem hesitação." </p><br />
                    <br />

                    <div className='container-perfil'>

                        <FaStar size={20} color='#facc15' />
                        <FaStar size={20} color='#facc15' />
                        <FaStar size={20} color='#facc15' />
                        <FaStar size={20} color='#facc15' />
                        <FaStar size={20} color='#facc15' />

                    </div>


                    <div className='foto-perfil'>
                        <img src='' alt='perfil' />
                        <br />
                        <div className='info-perfil'>
                            <h3> Carlos Eduardo </h3>
                            <p> CEO • TechStart Solutions </p>
                        </div>

                    </div>


                </div>
                <br />

                <div className='card-comentario'>
                    <FaQuoteLeft size={24} color='#facc15' />
                    <br />
                    <p> "O dashboard de analytics desenvolvido pela NEOVIZ revolucionou nossa tomada de decisões. Dados claros, insights valiosos e interface intuitiva." </p>
                    <br />

                    <div className='container-perfil'>

                        <FaStar size={20} color='#facc15' />
                        <FaStar size={20} color='#facc15' />
                        <FaStar size={20} color='#facc15' />
                        <FaStar size={20} color='#facc15' />
                        <FaStar size={20} color='#facc15' />

                    </div>


                    <div className='foto-perfil'>
                        <img src='' alt='perfil' />
                        <br />
                        <div className='info-perfil'>
                            <h3> Ana Rodrigues </h3>
                            <p> Diretora • Consultoria Digital </p>
                        </div>

                    </div>

                </div>
                <br />

            </div>

        </div>
    )
}

export default Comentarios;