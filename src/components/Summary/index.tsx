import { Container } from "./styles";
import { FiUserPlus } from 'react-icons/fi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

interface SummaryProps{
  onOpenNewUserModal: () => void;
  onOpenNewTransactionModal: () => void;
}

export function Summary({ onOpenNewTransactionModal, onOpenNewUserModal }: SummaryProps  ){
  return(
    <Container>
      
      <div className="content">
        <div className="transactions">
          <h2>Total</h2>
          <h1>R$ 100,00</h1>
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