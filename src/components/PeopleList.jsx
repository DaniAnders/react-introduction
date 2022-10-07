import React, {useContext} from 'react';
import styles from  './PeopleList.module.css';
import { PeopleContext } from '../contexts/PeopleContext';
import {Link} from 'react-router-dom';



const PeopleList = () => {

   const { users } = useContext(PeopleContext);

    return (  
      <div className={styles.personlist}>
         <nav>
            {users.length ? (
               <ul>
                  {users.map((person) => (
                     <li key={person.key} >
                        <Link to={`/personlist/${person.firstname}`} style={{ textDecoration: 'none', color: 'rgba(30, 29, 29, 0.844)'}}>
                           {person.firstname} {person.lastname}
                        </Link>
                     </li>
                  ))}
               </ul>
            ) : (
               <h3>List is empty!</h3>
            )
            }
         </nav>
      </div>
     )

}

export default PeopleList;