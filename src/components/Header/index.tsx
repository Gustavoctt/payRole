import { Container, Content } from "./styles";

function Header(){
  return(
    <Container>
      <Content>
        <div className='logo'>
            <h1>pagRole</h1><span>.</span>
        </div>
        <div className="buttons">
          <button>Cadastrar usuários</button>
          <button>Cadastrar gastos</button>
        </div>
      </Content>
    </Container>
  )
}

export default Header;