import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UserInfo from './components/UserInfo';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';



function App() {

  const [navigation, setNavigation] = useState(1);
  const [usertolist, setUserToList] = useState([])

  const setNewUser =(user) => {
    setUserToList(
      [...usertolist, 
      {
        ...user,
        key: Date.now()

      }])
  }



  return (
    <div className="App"> 
    <div className="Form-Container">
    <Navbar changePage={setNavigation}/>
      {navigation == 1 ? <RegistrationForm setNewUser={setNewUser}/> : <UserInfo props={usertolist}/>} 
    </div>
    <Footer /> 
  </div>  
        
  );
}

export default App;
