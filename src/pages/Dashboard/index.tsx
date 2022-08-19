import { useState } from "react";
import Header from "../../components/Header";
import { NewUsersModal } from "../../components/NewUsersModal";
import TransactionTable from "../../components/TransactionTable";

function Dashboard(){
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false)

  function handleOpenNewUserModal(){
    setIsNewUserModalOpen(true)
  }

  function handleCloseNewUserModal(){
    setIsNewUserModalOpen(false)
  }

  return(
    <>
      <Header onOpenNewUserModal={handleOpenNewUserModal}/>
      <TransactionTable />

      <NewUsersModal 
        isOpen={isNewUserModalOpen}
        onRequestClose={handleCloseNewUserModal}
      />
    </>
  )
}

export default Dashboard;