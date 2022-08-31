import { useTransactions } from "../../hooks/useTransactions";
import { Container, Content } from "./styles";

function TransactionTable(){
  const { transactions } = useTransactions();

  return(
    <Container>
      <h1>Transações</h1>
      <Content>
          {transactions.map(item => {
            return(
              <div key={item.id}>
                <p>{ item.title }</p>
                <p>{item.user}</p>
                <strong>{ item.amount }</strong>
              </div>
            )
          })}
      </Content>  
    </Container>
  )
}

export default TransactionTable;