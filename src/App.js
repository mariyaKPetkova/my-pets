import { Routes,Route} from 'react-router-dom'

import {AuthContext} from './contexts/AuthContext.js'
import Header from './components/Header/Header.js';
import Create from './components/Create/Create.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import Details from './components/Details/Details.js'
import Edit from './components/Edit/Edit.js'
import Login from './components/Login/Login.js'
import MyPets from './components/MyPets/MyPets.js'
import Register from './components/Register/Register.js'
import Logout from './components/Logout/Logout.js'
import { useState } from 'react';

function App() {
  const [user,setUser]= useState({
    _id:'',
    email:'',
    accessToken:'',
  })
  const login = (authData) => {
    
    setUser(authData);
  }

  // const logout = () => {
  //   setUser(initialAuthState);
  // };
  return (
    <AuthContext.Provider value={{user,login}}>
    <div id="container">
      <Header />
      <main id="site-content">
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard/>} />
          <Route path="/edit" element={<Edit/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/my-pets" element={<MyPets/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/details/:petId" element={<Details/>} />
        </Routes>

      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>

    </div>
    </AuthContext.Provider>
  );
}

export default App;
