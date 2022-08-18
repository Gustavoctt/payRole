import { GlobalStyle } from './styles/global';

import graphics from './assets/graphics.svg';

import { Container, BackgroundBall, Header, Content } from './styles/home';

function App() {
  return (
    <>
      <Container>
        <BackgroundBall/>
        <Header>
          <div className='logo'>
            <h1>pagRole</h1><span>.</span>
          </div>
          <div>
            <button>Dividir a conta!</button>
          </div>
        </Header>

        <Content>
          <div className='contentLeft'>
            <h1>Divida as suas contas depois do role! </h1>
            <h3>Para você dividir a conta é muito fácil, é só cadastrar os gastos e eperar o pix.</h3>

            <a>
              <p>Login</p>
            </a>
          </div>
          <div className='contentRight'>
            <img src={graphics} alt="Graphics" />
          </div>
        </Content>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
