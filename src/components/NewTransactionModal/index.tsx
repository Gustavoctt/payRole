import { useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { FiX } from 'react-icons/fi';
import { useUsers } from '../../hooks/useUsers';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTrasanctionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const { users } = useUsers();
  
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

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

    <Container>
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
          onChange={ e => setAmount(e.target.value) }
        />

        {users.length > 0 && (
          <select>
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