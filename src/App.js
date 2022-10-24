import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import RegistrationForm from './components/RegistrationForm';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PeopleList from './components/PeopleList';
import PeopleContextProvider from './contexts/PeopleContext';
import AuthContextProvider from './contexts/AuthContext';
import PersonInfo from './components/PersonInfo';
import Error from './components/Error';
import Login from './pages/Login';
import Logout from './pages/Logout';
import ApiConfigProvider from './services/ApiConfig';
import PeopleTable from './components/crud/PeopleTable';
import Cities from './components/crud/Cities';
import Countries from './components/crud/Countries';




function App() {


  
  return (
    
  <> 
    
 
    <PeopleContextProvider>
      <AuthContextProvider>
      <ApiConfigProvider>
        <Navbar />
    <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/registration' element={<RegistrationForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/peopletable' element={<PeopleTable  />} />
        <Route path='/peopletable/:ssn' element={<PersonInfo />} />
        <Route path='/cities' element={<Cities  />} />
        <Route path='/countries' element={<Countries  />} />
        <Route path="*" element={<Error />} />
       
    </Routes>
      </ApiConfigProvider>
      </AuthContextProvider> 
    </PeopleContextProvider>
  
    <Footer /> 
  </>  
        
  );
}

export default App;
