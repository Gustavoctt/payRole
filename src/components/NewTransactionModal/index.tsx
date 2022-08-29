import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import { useUsers } from '../../hooks/useUsers';
import { useTransactions } from '../../hooks/useTransactions';

import { FiX } from 'react-icons/fi';
import { MdOutlineSubtitles } from 'react-icons/md';
import {TbCash} from 'react-icons/tb';
import {IoIosArrowDown} from 'react-icons/io';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTrasanctionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const { users } = useUsers();
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedUser, setSelectedUser] = useState('');


  function parseSelected(event: React.ChangeEvent<HTMLSelectElement>) {
    const valueToParse = event.target.value;
    setSelectedUser(valueToParse);
    return;
  }

  function handleAmount(event: React.ChangeEvent<HTMLInputElement>){
    const result = event.target.value.replace(/\D/g, '');

    setAmount(result)
  }
    
  function handleCreateTransaction(event: FormEvent){
    event.preventDefault()

    createTransaction({
      title,
      amount,
      user: selectedUser
    })

    setTitle('')
    setAmount('')
    setSelectedUser('')

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

          

    <Container onSubmit={handleCreateTransaction} >
      <div>
        <h2>Cadastrar gastos</h2>
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
          value={title}
          onChange={e =>  setTitle(e.target.value)}
        />
        <label>Titulo do gasto</label>
        <MdOutlineSubtitles size={20}/>
      </div>

      <div className='text-input-container'>
        <input 
          required
          type="text" 
          value={amount}
          onChange={handleAmount}
        />
        <label htmlFor="">Valor</label>
        <TbCash size={20}/>
      </div>


      <div className='text-select-container'>
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
        <IoIosArrowDown />
      </div>

      <button 
        type='submit'
        disabled={!title || !amount || !selectedUser}
      >
        Cadastrar
      </button>
      </Container>
    </Modal >
  )
}