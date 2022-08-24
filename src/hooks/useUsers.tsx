import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Users {
  id: number;
  name: string;
}

type UserInput = Pick<Users, 'name'>

interface UserProviderProps{
  children: ReactNode
}

interface UsersContextData{
  users: Users[],
  createUser: (user: UserInput) => Promise<void>
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData)

export function UsersProvider({ children }: UserProviderProps){
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    api.get('users')
    .then(response => setUsers(response.data))
  }, [])

  async function createUser(userInput: UserInput){
    const response = await api.post('/users', {
      ...userInput
    }) 
    const { users : user } = response.data;

    setUsers([...users, user])
  }
  return(
    <UsersContext.Provider value={{ users, createUser }}>
      { children }
    </UsersContext.Provider>
  )
}

export function useUsers(){
  const context = useContext(UsersContext)

  return context;
}