import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transactions {
  id: number;
  title: string;
  amount: string;
  user: string;
}

type TransactionInput = Pick<Transactions, 'title' | 'amount' | 'user'>

interface TransactionProviderProps{
  children: ReactNode;
}

interface TransactionsContextData{
  transactions: Transactions[];
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransacionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionProviderProps){
  const [transactions, setTransactions] = useState<Transactions[]>([])

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data))
  }, [])

  async function createTransaction(transactionInput: TransactionInput){
    //console.log(transactionInput)
    const response = await api.post('/transactions', {
      ...transactionInput
    })

    console.log(response.data)

    const {transaction} = response.data;

    setTransactions([...transactions, transaction])
  }

  return(
    <TransacionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransacionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransacionsContext)

  return context;
}