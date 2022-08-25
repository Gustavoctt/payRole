import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { FiX, FiUserPlus } from 'react-icons/fi';
import { RiAddFill } from 'react-icons/ri'
import { useUsers } from '../../hooks/useUsers';


interface NewUsersModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewUsersModal({isOpen, onRequestClose}: NewUsersModalProps){
  const { createUser } = useUsers();

  const [name, setName] = useState('');

  async function handleCreateNewUser(event: FormEvent){
    event.preventDefault()

    await createUser({
      name
    })
    setName('')
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
          

    <Container onSubmit={handleCreateNewUser}>
      <div>
        <h2>Cadastrar usuário</h2>
        <button
          type='button'
          onClick={onRequestClose}
          >
          <FiX size={24}/>
        </button>
      </div>

      <div className='text-input-container'>
        <input 
          required
          type="text" 
          value={name}
          onChange={ e => setName(e.target.value) 
          }
        />
        <label htmlFor="">User</label>
        <FiUserPlus size={16}/>
      </div>

        <button type='submit'>
          Cadastrar
          <RiAddFill size={20}/>
        </button>
      </Container>
    </Modal >
  )
}