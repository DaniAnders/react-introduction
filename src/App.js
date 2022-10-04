import React, {useEffect, useMemo, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UserInfo from './components/UserInfo';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import PersonList from './pages/PersonList';



function App() {

  const [userdata, setUserData] = useState(
    {
     firstname: '',
     lastname: '',
     age: '',
     nationality: '',
     email: '',
     key: 1
    }   
 )

  const [navigation, setNavigation] = useState(1);
  


  return (
    <div className="App"> 
    <div className="Form-Container">
    <Navbar changePage={setNavigation}/>
      {navigation == 1 ? <RegistrationForm userdata={userdata} setUserData={setUserData}/> : <UserInfo props={userdata}/>} 
    </div>
    
    <Footer /> 
  </div>  
        
  );
}

export default App;
