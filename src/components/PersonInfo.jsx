import React, { useContext } from "react";
import styles from  './PersonInfo.module.css';
import { useParams } from "react-router-dom";
import { PeopleContext } from '../contexts/PeopleContext';

const PersonInfo = () => {

    const { users } = useContext(PeopleContext);

    const { firstname } = useParams();

    return (
        <div className={styles.personinfo}>
             <ul>
                    {users.map((person) => (           
                        (person.firstname === firstname) &&  <div>
                        <h4>Name</h4> 
                        <li>{person.firstname} {person.lastname}</li>
                        <h4>Age</h4> 
                        <li>{person.age}</li>
                        <h4>Nationality</h4> 
                        <li>{person.nationality}</li>
                        <h4>Email</h4> 
                        <li>{person.email}</li>
                    </div>
           
                    ))}
                </ul>
            
        </div>
    );
}

export default PersonInfo;