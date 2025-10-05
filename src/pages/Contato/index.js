import './Contato.css'


function Contato() {
  return (
    <div className="cta-main">

      <div className="cta-header">
        <h1>Pronto Para <span>Transformar</span> Seu Negócio?</h1>
        <p>Entre em contato conosco e descubra como podemos impulsionar seu negócio com soluções digitais inovadoras e design excepcional.</p>
      </div>

      <div className="cta-card">
        <div className="cta-logo">
          <img src="neoviz-logo.png" alt="NEOVIZ Logo" />
        </div>
        <h2>Vamos Criar Algo <span>Extraordinário</span> Juntos</h2>
        <p>Nossa equipe está pronta para transformar sua visão em realidade digital. Agende uma conversa gratuita e sem compromisso.</p>

        <div className="contact-options">
          <div className="contact-card whatsapp">
            <span className="icon"></span>
            <h3>WhatsApp</h3>
            <p>Resposta em minutos</p>
          </div>
          <div className="contact-card email">
            <span className="icon"></span>
            <h3>E-mail</h3>
            <p>contato@neoviz.com.br</p>
          </div>
          <div className="contact-card phone">
            <span className="icon"></span>
            <h3>Telefone</h3>
            <p>+55 (11) 99999-9999</p>
          </div>
        </div>

        <a href="#" className="btn-cta">Começar Meu Projeto Agora →</a>
        <p className="note">Consultoria inicial gratuita • Sem compromisso • Resposta garantida em 24h</p>
      </div>

      <div className="cards-container">
        <div className="card69">
          <div className="icon2">✓</div>
          <h3>Consultoria Gratuita</h3>
          <p>Análise completa do seu projeto sem custo</p>
        </div>
        <div className="card69">
          <div className="icon2">✓</div>
          <h3>Entrega Garantida</h3>
          <p>Prazos respeitados e qualidade assegurada</p>
        </div>
        <div className="card69">
          <div className="icon2">✓</div>
          <h3>Suporte Contínuo</h3>
          <p>Acompanhamento e suporte pós-entrega</p>
        </div>
      </div >
    </div>
  )
}

export default Contato;