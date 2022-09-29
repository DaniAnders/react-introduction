import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UserInfo from './components/UserInfo';


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <h1>React Introduction</h1>
      </header>
      <div className="Form-Container">
        <RegistrationForm />
      </div>
    </div>       
  );
}

export default App;
