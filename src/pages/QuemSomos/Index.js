
import './QuemSomos.css'


function QuemSomos() {

  return (
    <div className='QuemSomos' >
      <section class="container">
        <div class="content">
          <h1>Quem Somos <span>NEOVIZ</span></h1>
          <div class="linha-horizontal"></div>
          <p>Somos uma empresa de <strong>soluções digitais inovadoras</strong> especializada em transformar pequenos negócios através da tecnologia e design excepcional.</p>
          <p>Nossa missão é <strong>democratizar o acesso à inovação digital</strong>, oferecendo serviços de alta qualidade que antes eram exclusivos de grandes empresas.</p>
          <p>Combinamos <strong>experiência técnica</strong>, <strong>visão estratégica</strong> e <strong>paixão por resultados</strong> para criar soluções que realmente impactam o crescimento dos nossos clientes.</p>
          <a href="#" class="btn">Conhecer Nossa História</a>
        </div>

        <div class="cards">
          <div class="card">
            <i class="fas fa-medal"></i>
            <h2>50+</h2>
            <p>Projetos Entregues</p>
          </div>
          <div class="card">
            <i class="fas fa-users"></i>
            <h2>30+</h2>
            <p>Clientes Satisfeitos</p>
          </div>
          <div class="card">
            <i class="fas fa-lightbulb"></i>
            <h2>5+</h2>
            <p>Anos de Experiência</p>
          </div>
          <div class="card">
            <i class="fas fa-bullseye"></i>
            <h2>100%</h2>
            <p>Foco em Resultados</p>
          </div>

          <div class="vision">
            <i class="fas fa-bullseye"></i>
            <div>
              <strong>Nossa Visão</strong>
              <p>Ser referência em inovação digital para pequenos negócios, criando soluções que transformam ideias em sucessos digitais sustentáveis.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="valores">
        <h2>Nossos <span>Valores</span></h2>
        <div class="valores-grid">
          <div class="valor-item">
            <div class="dot"></div>
            <h3>Inovação Constante</h3>
            <p>Sempre à frente das tendências tecnológicas e de design.</p>
          </div>
          <div class="valor-item">
            <div class="dot"></div>
            <h3>Excelência em Entrega</h3>
            <p>Qualidade superior em cada projeto, sem exceções.</p>
          </div>
          <div class="valor-item">
            <div class="dot"></div>
            <h3>Parceria Genuína</h3>
            <p>Seu sucesso é nosso sucesso. Crescemos juntos.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuemSomos;

