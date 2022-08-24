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
  //const [user, setUser] = useState('');
  const [selected, setSelected] = useState('');

 // console.log(users)

  function parseSelected(event: React.ChangeEvent<HTMLSelectElement>) {
    const valueToParse = event.target.value;
   // const itemSelected = JSON.parse(valueToParse);
    setSelected(valueToParse);
    return;
  }

  
    
  function handleCreateTransaction(event: FormEvent){
    event.preventDefault()

    console.log(selected)
    
    createTransaction({
      title,
      amount,
      user: selected
    })

    setTitle('')
    setAmount(0)
    setSelected('')

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
          onChange={parseSelected}
          >
            <option value="">Selecione</option>
            {users.map(user => {
              return(
                <option key={user.id} value={user.name}>{user.name}</option>
              )
            })}
          </select>
        )}

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal >
  )
}