import { Container } from "./styles";
import { FiUserPlus } from 'react-icons/fi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { useTransactions } from "../../hooks/useTransactions";
import { formatPrice } from "../../util/format";

interface SummaryProps{
  onOpenNewUserModal: () => void;
  onOpenNewTransactionModal: () => void;
}

export function Summary({ onOpenNewTransactionModal, onOpenNewUserModal }: SummaryProps  ){
  const { transactions } = useTransactions();

  const totalPrice = transactions.reduce((acc, transaction) => {
    acc.price += transaction.price;
    return acc;
  }, {
    price: 0
  })

  
  var priceFormatted = formatPrice(totalPrice.price);

  return(
    <Container>
      
      <div className="content">
        <div className="transactions">
          <h2>Total</h2>
          <h1>{ priceFormatted }</h1>
        </div>
        <div className="buttons">
          <button onClick={onOpenNewUserModal}>
            Novo Usuário
            <FiUserPlus size={20}/>
          </button>
          <button onClick={onOpenNewTransactionModal}>
            Novo Gasto
            <MdOutlineAddShoppingCart size={20}/>
          </button>
        </div>
      </div>

    </Container>
  )
}