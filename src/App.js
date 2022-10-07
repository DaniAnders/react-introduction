import React, {useState} from 'react';
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



function App() {

  const [navigation, setNavigation] = useState(1);
 


  return (
    
  <> 
   
    <PeopleContextProvider>
      <AuthContextProvider>
        <Navbar />
    <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/registration' element={<RegistrationForm />} />
        <Route path='/personlist' element={<PeopleList />} />
        <Route path='/personlist/:firstname' element={<PersonInfo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="*" element={<Error />} />
       
    </Routes>
      </AuthContextProvider> 
    </PeopleContextProvider>
  
    <Footer /> 
  </>  
        
  );
}

export default App;
