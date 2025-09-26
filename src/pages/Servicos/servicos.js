
import './servicos.css';

function Servicos() {
    return (
        <div className='container-center'>
            <h1> Nossos <span> Serviços </span> </h1>
            <br />
            <h3> Soluções completas e integradas para transformar sua presença digital e gerar resultados excepcionais para seu negócio. </h3>

            <div className='card-container'>

                <div className='card'>
                    <img alt='icon' />
                    <h3> Desenvolvimento Web </h3>
                    <p> Sites modernos, responsivos e otimizados para conversão. Desenvolvemos com as mais avançadas tecnologias para garantir performance e experiência única. </p>
                    <ul>
                        <li> Sites Responsivos </li>
                        <li> E-commerce </li>
                        <li> Aplicações Web </li>
                        <li> SEO Avançado </li>
                    </ul>

                    <button className='saber-mais'> Saber mais → </button>
                </div>
                <br />

                <div className='card'>
                    <img alt='icon' />
                    <h3> Design & Identidade Visual </h3>
                    <p> Criamos designs únicos que representam a essência da sua marca. Desde logotipos até interfaces completas, cada detalhe é pensado estrategicamente. </p>
                    <ul>
                        <li> UI/UX Design </li>
                        <li> Logotipos </li>
                        <li> Identidade Visual </li>
                        <li> Branding Completo </li>
                    </ul>

                    <button className='saber-mais'> Saber mais → </button>
                </div>
                <br />

                <div className='card'>
                    <img alt='icon' />
                    <h3> Análise de Dados </h3>
                    <p> Transformamos dados em insights estratégicos para impulsionar seu negócio. Analytics, métricas e relatórios que geram resultados reais. </p>
                    <ul>
                        <li> Google Analytics </li>
                        <li> Relatórios Custom </li>
                        <li> Business Intelligence </li>
                        <li> ROI Tracking </li>
                    </ul>

                    <button className='saber-mais'> Saber mais → </button>
                </div>
                <br />

            </div>


            <div className='card-horizontal'>
                <div className='texto'>
                    <h3> Projeto Personalizado? </h3>
                    <p> Conte-nos a sua ideia e criaremos a solução perfeita. </p>
                </div>

                <button className='button-conversar'> Conversar Agora </button>
            </div>

        </div>
    )
}

export default Servicos;