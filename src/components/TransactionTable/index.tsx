import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

function TransactionTable(){
  const { transactions } = useTransactions();

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
          {transactions.map(item => {
            return(
              <tr key={item.id}>
                <td>{ item.title }</td>
                <td>R$ { item.amount }</td>
                {/* <td>{item.user}</td> */}
              </tr>
            )
          })}
        </tbody>
      </table>  
    </Container>
  )
}

export default TransactionTable;