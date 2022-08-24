import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { FiX } from 'react-icons/fi';
import { useUsers } from '../../hooks/useUsers';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTrasanctionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const { users } = useUsers();
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [user, setUser] = useState('');
    
  function handleCreateTransaction(event: FormEvent){
    event.preventDefault()

    console.log(user)

    // createTransaction({
    //   title,
    //   amount,
    //  // user
    // })

    onRequestClose()
  }

  return(
    <Modal 
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >

          
    <button
      type='button'
      onClick={onRequestClose}
      className='react-modal-close'
      >
      <FiX size={24}/>
    </button>

    <Container onSubmit={handleCreateTransaction} >
        <h2>Cadastrar gastos</h2>

        <input 
          type="text" 
          placeholder='Titulo do Gasto'
          value={title}
          onChange={ e => setTitle(e.target.value) }
        />

        <input 
          type="text" 
          placeholder='Valor'
          value={amount}
          onChange={ e => setAmount(Number(e.target.value)) }
        />

        {users.length > 0 && (
          <select 
           value={user}
           onChange={e => setUser(e.target.value)}
          >
            {users.map(user => {
              return(
                <option key={user.id} value={user.id}>{user.name}</option>
              )
            })}
          </select>
        )}

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal >
  )
}