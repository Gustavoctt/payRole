import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { FiX } from 'react-icons/fi';
import { api } from '../../services/api';

interface NewUsersModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewUsersModal({isOpen, onRequestClose}: NewUsersModalProps){
  const [users, setUsers] = useState('');
  

  async function handleCreateNewUser(event: FormEvent){
    // event.preventDefault()

    // const response = await api.post('/users', {
    //   users
    // })

    // console.log(response.data)

    // setUsers('')
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

    <Container onSubmit={handleCreateNewUser}>
        <h2>Cadastrar usuário</h2>

        <input 
          type="text" 
          placeholder='Nome'
          value={users}
          onChange={ e => setUsers(e.target.value) }
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal >
  )
}