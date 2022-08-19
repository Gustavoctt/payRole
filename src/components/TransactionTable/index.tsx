import { Container } from "./styles";

function TransactionTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Pago por</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bebidas</td>
            <td>R$ 200,00</td>
            <td>Gustavo</td>
          </tr>
          <tr>
            <td>Bebidas</td>
            <td>R$ 200,00</td>
            <td>Gustavo</td>
          </tr>
          <tr>
            <td>Bebidas</td>
            <td>R$ 200,00</td>
            <td>Gustavo</td>
          </tr>
          <tr>
            <td>Bebidas</td>
            <td>R$ 200,00</td>
            <td>Gustavo</td>
          </tr>
        </tbody>
      </table>  
    </Container>
  )
}

export default TransactionTable;