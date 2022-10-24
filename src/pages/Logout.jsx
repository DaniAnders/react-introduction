import { Button } from "react-bootstrap";
import React, { useContext} from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';



const Logout = () => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const { token } = useContext(AuthContext);
    const { setToken } = useContext(AuthContext);
    const { setUser } = useContext(AuthContext);


    const onSubmit = (event) => {
        event.preventDefault();
        if(token) {
            setToken('');
            setUser('');
            return navigate('/');
        }
       
    }

    return(
        <div style={{ backgroundColor: '#ebead9', color: 'rgba(0, 0, 0, 0.507)' , height: '300px'}}>
            <h3> Hi, {user} confirm you want to log out!</h3>
            <form onSubmit={onSubmit}>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Username:{user}</label>
            </div>
            <div className="form-group row">
                <div lassName="col-sm-5">
                   <Button  type="submit" variant="success" size="lg" >Logout</Button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Logout;