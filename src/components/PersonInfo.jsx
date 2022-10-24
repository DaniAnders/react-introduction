import React, { useContext } from "react";
import styles from  './PersonInfo.module.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { PeopleContext } from '../contexts/PeopleContext';

const PersonInfo = () => {

    const { userslist } = useContext(PeopleContext);
    const { ssn } = useParams();
    const navigate = useNavigate();

    return (
        <div >
            <div className={styles.personinfo}>
            <ul>
                    {userslist.map((person) => ( 

                        (person.ssn === ssn) &&  <div>
                        <h4>SSN</h4> 
                        <li>{person.ssn}</li>
                        <h4>First Name</h4> 
                        <li>{person.firstName}</li>
                        <h4>Last Name</h4> 
                        <li>{person.lastName}</li>
                        <h4>Phone</h4> 
                        <li>{person.phone}</li>
                        <h4>City</h4> 
                        <li>{person.city}</li>
                        <h4>Languages</h4> 
                        <li>{person.languages}</li>      
                    </div>
           
                    ))}
                </ul>      
            </div>
                <Button className={styles.button} type="submit" variant="success" size="lg" onClick={() => navigate('/peopletable')}>Back to People List</Button>   
        </div>
    );
}

export default PersonInfo;