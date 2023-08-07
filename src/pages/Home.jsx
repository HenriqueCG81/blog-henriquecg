import image from '../images/foto1.jpg';

function Home() {
  return (
    <div className="ui container">
      <div className="ui segment">
        <h1>Bem-vindo à minha página</h1>
        <img
          className="ui rounded image"
          width={'400px'}
          src={image}
          alt="Imagem"
        />
        <div className="ui divider"></div>
        <div className="ui grid">
          <div className="three column row">
            <div className="column">
              <a href={'https://www.linkedin.com/henriquecg/'}>
                <i className="linkedin icon large"></i>
              </a>
              <p>LinkedIn</p>
            </div>
            <div className="column">
              <i className="phone icon large"></i>
              <p>(351) 927278037</p>
            </div>
            <div className="column">
              <i className="mail icon large"></i>
              <p>henriquecglondon@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
