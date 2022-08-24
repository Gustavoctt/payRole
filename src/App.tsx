import { GlobalStyle } from './styles/global';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { UsersProvider } from './hooks/useUsers';
import { TransactionsProvider } from './hooks/useTransactions';

function App() {
  return (
    <UsersProvider>
      <TransactionsProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
          <GlobalStyle />
        </BrowserRouter>
      </TransactionsProvider>
    </UsersProvider>
  );
}

export default App;
