import { Container, Content } from "./styles";

interface HeaderProps{
  onOpenNewUserModal: () => void
}

function Header({onOpenNewUserModal}: HeaderProps){
  return(
    <Container>
      <Content>
        <div className='logo'>
            <h1>pagRole</h1><span>.</span>
        </div>
        <div className="buttons">
          <button 
            onClick={onOpenNewUserModal}
          >Cadastrar usuários</button>
          <button>Cadastrar gastos</button>
        </div>
      </Content>
    </Container>
  )
}

export default Header;