import { useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { FiX } from 'react-icons/fi';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface NewUsersModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewUsersModal({isOpen, onRequestClose}: NewUsersModalProps){
  const [name, setName] = useState('');

  return(
    <Modal 
      isOpen={isOpen}
      //style={customStyles}
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