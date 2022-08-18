import { BackgroundBall, Container, Content, Header } from "../styles/home";

import graphics from '../assets/graphics.svg';
import { Link } from "react-router-dom";

function Home(){
  return(
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

            <Link to={"/dashboard"}>
              <p>Login</p>
            </Link>
          </div>
          <div className='contentRight'>
            <img src={graphics} alt="Graphics" />
          </div>
        </Content>
      </Container>
  )
}

export default Home;