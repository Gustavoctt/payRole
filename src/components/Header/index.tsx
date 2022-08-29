import { Container, Content } from "./styles";

function Header(){
  return(
    <Container>
      <Content>
        <div className='logo'>
            <h1>pagRole</h1><span>.</span>
        </div>
       
      </Content>
    </Container>
  )
}

export default Header;