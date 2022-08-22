import { useState } from "react";
import Header from "../../components/Header";
import { NewTrasanctionModal } from "../../components/NewTransactionModal";
import { NewUsersModal } from "../../components/NewUsersModal";
import TransactionTable from "../../components/TransactionTable";

function Dashboard(){
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false)
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewUserModal(){
    setIsNewUserModalOpen(true)
  }

  function handleCloseNewUserModal(){
    setIsNewUserModalOpen(false)
  }

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  return(
    <>
      <Header 
        onOpenNewUserModal={handleOpenNewUserModal}
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <TransactionTable />

      <NewUsersModal 
        isOpen={isNewUserModalOpen}
        onRequestClose={handleCloseNewUserModal}
      />

      <NewTrasanctionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  )
}

export default Dashboard;