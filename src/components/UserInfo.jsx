import React, {Fragment, useState} from 'react';
import RegistrationForm from "./RegistrationForm";


const UserInfo = ({list}) => {
  
   const [userlist, setUserList] = useState([...userlist,{
         ...list
   }])


    return (
         userlist.map((user) =><Fragment>
                       
               <table className="table table-hover table-dark">
                  <thead>
                     <tr>
                      <th scope="col">ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">Nationality</th>
                      <th scope="col">Email</th>
                    </tr>
                 </thead>
                <tbody>
                   <tr>
                      <th scope="row">{user.key}</th>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{user.age}</td>
                      <td>{user.nationality}</td>
                      <td>{user.email}</td>
                   </tr>
                 </tbody>
              </table>
           
    </Fragment>
            
    )
    )
}

export default UserInfo;