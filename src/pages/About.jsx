function About() {
  return (
    <div className="ui segment">
      <h1>About</h1>
      <div className="ui two column grid">
        <div className="column">
          <img
            className="ui rounded image"
            src="caminho_para_sua_imagem.jpg"
            alt="Imagem"
          />
        </div>
        <div className="column">
          <h2>Web Developer Junior</h2>
          <p>
            Sou um entusiasta da programação em busca de aprendizado constante.
            Estou focado em desenvolvimento web e sou apaixonado por criar
            soluções criativas e funcionais. Tenho experiência com tecnologias
            como HTML, CSS, JavaScript, e estou constantemente explorando novas
            ferramentas e frameworks, como React e Semantic UI.
          </p>
          <p>
            Meu objetivo é contribuir em projetos desafiadores, aprender com
            profissionais experientes e continuar aprimorando minhas habilidades
            como desenvolvedor web. Estou animado para fazer parte do mundo da
            programação e criar soluções inovadoras para problemas reais.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
