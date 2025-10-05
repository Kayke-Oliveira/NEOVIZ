import './Projeto.css'


function Projetos() {

  return (
    <div class="portfolio">
      <h2>Projetos &<span> Cases</span></h2>
      <h3>Conheça alguns dos projetos que transformaram negócios e geraram resultados excepcionais para nossos clientes.</h3>
      <div class="portfolio-grid">

        <div class="portfolio-card">
          <div class="portfolio-img img-placeholder"></div>
          <div class="portfolio-content">
            <span class="tag yellow">Desenvolvimento Web</span>
            <span class="result yellow">+150% Conversões</span>
            <h3 class="e-commerce">E-commerce Elegante</h3>
            <p>Plataforma completa de vendas online com design moderno e experiência de compra otimizada.</p>
            <div class="tags">
              <span>React</span>
              <span>E-commerce</span>
              <span>UI/UX</span>
            </div>
            <div class="buttons">
              <a href="#" class="btn-primary">Ver Detalhes</a>
              <a href="#" class="btn-secondary">Case Study</a>
            </div>
          </div>
        </div>

        <div class="portfolio-card">
          <div class="portfolio-img img-placeholder"></div>
          <div class="portfolio-content">
            <span class="tag yellow">Design & Branding</span>
            <span class="result yellow">+200% Brand Recognition</span>
            <h3>Identidade Visual Premium</h3>
            <p>Criação completa de identidade visual para startup tech. Logotipo, cores e aplicações.</p>
            <div class="tags">
              <span>Branding</span>
              <span>Logo</span>
              <span>Visual Identity</span>
            </div>
            <div class="buttons">
              <a href="#" class="btn-primary">Ver Detalhes</a>
              <a href="#" class="btn-secondary">Case Study</a>
            </div>
          </div>
        </div>

        <div class="portfolio-card">
          <div class="portfolio-img img-placeholder"></div>
          <div class="portfolio-content">
            <span class="tag yellow">Análise de Dados</span>
            <span class="result yellow">+85% Eficiência Operacional</span>
            <h3>Dashboard Analítico</h3>
            <p>Sistema completo de análise de dados com visualizações interativas para decisões estratégicas.</p>
            <div class="tags">
              <span>Analytics</span>
              <span>Dashboard</span>
              <span>BI</span>
            </div>
            <div class="buttons">
              <a href="#" class="btn-primary">Ver Detalhes</a>
              <a href="#" class="btn-secondary">Case Study</a>
            </div>
          </div>
        </div>

        <div class="portfolio-card">
          <div class="portfolio-img img-placeholder"></div>
          <div class="portfolio-content">
            <span class="tag yellow">Desenvolvimento Mobile</span>
            <span class="result yellow">4.8★ App Store</span>
            <h3>App Mobile Inovador</h3>
            <p>Aplicativo mobile com design intuitivo e funcionalidades avançadas, focado na experiência do usuário.</p>
            <div class="tags">
              <span>Mobile</span>
              <span>UI/UX</span>
              <span>Innovation</span>
            </div>
            <div class="buttons">
              <a href="#" class="btn-primary">Ver Detalhes</a>
              <a href="#" class="btn-secondary">Case Study</a>
            </div>
          </div>
        </div>

        <div class="cta-section">
          <h2>Quer Ver Mais <span>Projetos?</span></h2>
          <p>Temos um portfólio completo com dezenas de cases de sucesso.
            Entre em contato e conheça todos os nossos trabalhos.</p>

          <div class="cta-buttons">
            <a href="#" class="btn-primario">Ver Portfólio Completo →</a>
            <a href="#" class="btn-secundario">Solicitar Orçamento</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projetos;