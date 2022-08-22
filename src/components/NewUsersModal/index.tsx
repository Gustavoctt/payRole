import { useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { FiX } from 'react-icons/fi';

interface NewUsersModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewUsersModal({isOpen, onRequestClose}: NewUsersModalProps){
  const [name, setName] = useState('');

  return(
    <Modal 
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={onRequestClose}
    >

          
    <button
      type='button'
      onClick={onRequestClose}
      className='react-modal-close'
      >
      <FiX size={24}/>
    </button>

    <Container>
        <h2>Cadastrar usuário</h2>

        <input 
          type="text" 
          placeholder='Nome'
          value={name}
          onChange={ e => setName(e.target.value) }
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal >
  )
}