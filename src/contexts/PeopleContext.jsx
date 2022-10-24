import React, {createContext, useState} from "react";

export const PeopleContext = createContext();

const PeopleContextProvider = (props) => {

    const [users, setUsers] = useState([]);

    const [userslist, setUsersList] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState(
      {        
          ssn: '',
          firstName: '',
          lastName: '',
          phone: '',
          city: '',
          // country: '',
          languages: ''
        
      }
  )
    

     const setNewUser =(newUser) => {
       setUsers(
         [...users, 
         {
           ...newUser,
           key: Date.now()
   
         }])
     }


     const removeUser = (key) => {
        setUsers(users.filter(person => person.key !== key));
     }

     const showPersonInfo = (key) => {
      return (
         <div>
         {
            users.map(person => {
               if(person.key == key){
                  <>
                  <h4>{person.firstname}</h4>
                  <h4>{person.lastname}</h4>
                  <h4>{person.age}</h4>
                  <h4>{person.nationality}</h4>
                  <h4>{person.email}</h4>
                  </>
               }

            })
         }
       </div>
      )
     }


     return (
        <PeopleContext.Provider value={{users, setNewUser, removeUser, showPersonInfo, userslist, setUsersList, selectedPerson, setSelectedPerson}}>
            {props.children}
        </PeopleContext.Provider>
     );  
}


export default PeopleContextProvider;