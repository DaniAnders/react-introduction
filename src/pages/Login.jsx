import React, { useState, useContext} from "react";
import styles from './Login.module.css'
import { Button } from "react-bootstrap";
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const { setToken } = useContext(AuthContext);
    const { setUser } = useContext(AuthContext);
    const { error } = useContext(AuthContext);
    const { setError } = useContext(AuthContext);
    const navigate = useNavigate();

    const initialState =() => {
        return {username: '', password: '' };
    }

    const [uservalues, setUserValues] = useState(initialState);
 

    const login = ({username, password}) => {
        if(username.trim().length !== 0 && password.trim().length !== 0 && password.trim().length == 6){
            return  {token: '123', user: username};
        }
        return {error: 'Invalid username or password! Password must have at least 6 characters!'};
    }


    const onChange = (event) => {
        const {value, name} = event.target;
        setUserValues({
            ...uservalues,
            [name]:value,
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const {token, error, user} = login(uservalues);
        if(token) {
            setToken(token);
            setUser(user);
            return navigate('/');
        }

        setError(error);
        setUserValues(initialState);
       
    }



    return(
        <div className={styles.login_form}>
            <div className={styles.login}> <h3>Login</h3> </div>
            {(error.length !== 0) ? (<h4>{error}</h4>) : (<p></p>) }
            <form onSubmit={onSubmit} >
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Username</label>
                <div className="col-sm-5">
                    <input className={styles.input}
                     type="text"
                     placeholder="Username"
                     name="username"
                      required onChange={onChange} value={uservalues.username}></input>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-5">
                    <input className={styles.input}
                     type="password"
                     placeholder=""
                     name="password"
                     required onChange={onChange} value={uservalues.password}></input>
                </div>
            </div>
            <div className="form-group row">
                <div lassName="col-sm-5">
                   <Button   className={styles.button} type="submit" variant="success" size="lg" >Login</Button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Login;