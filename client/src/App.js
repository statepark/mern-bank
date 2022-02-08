import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Navigation';

import UserList from './components/UserList';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Home from './components/Home';
import Login from './components/Login';
import Withdraw from './components/Withdraw';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/GlobalState';

function App() {
  return (
    <UserProvider>
      <Navigation />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createAccount' element={<CreateAccount />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/userList' element={<UserList />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
