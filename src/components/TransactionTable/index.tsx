import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transactions {
  id: number,
  title: string,
  amount: number,
  user: string
}

function TransactionTable(){
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data))
  }, [])
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
          {transactions.map(transaction => {
            return(
              <tr key={transaction.id}>
                <td>{ transaction.title }</td>
                <td>R$ { transaction.amount }</td>
                <td>{transaction.user}</td>
              </tr>
            )
          })}
        </tbody>
      </table>  
    </Container>
  )
}

export default TransactionTable;