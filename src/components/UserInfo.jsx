import React, {Fragment} from 'react';
import Table from 'react-bootstrap/Table';
import styles from  './UserInfo.module.css';


const UserInfo = ({props}) => {

    return (
      props.length === 0  ? <h3> The users list is empty!</h3> :
         props.map((user, index) =><Fragment key={user.key}>                 
               <Table striped bordered hover className={styles.table_container}>
                  <thead>
                     <tr className={styles.table_row}>
                      <th scope="col" >ID</th>
                      <th scope="col" >First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">Nationality</th>
                      <th scope="col">Email</th>
                    </tr>
                 </thead>
                <tbody>
                   <tr className={styles.table_row}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{user.age}</td>
                      <td>{user.nationality}</td>
                      <td>{user.email}</td>
                   </tr>
                 </tbody>
              </Table>    
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
    </pre>     
    </Fragment>
            
    ) 

    )
}

export default UserInfo;