import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import styles from  './RegistrationForm.module.css';



const RegistrationForm = ({userdata, setUserData}) => {

 
    const handleUserInputChange = (event) => {
        setUserData(prev => ({
            ...prev, 
            [event.target.name] : event.target.value

        }))
    }


    const setNewPerson =(user) => {
         setUserData([     
          {
            ...user,
            key: Date.now()
    
          }  
        ])
     
      }


    const sendUsersData = (event) => {
        alert( 'A form was submitted')
        event.preventDefault();
        event.target.reset();
        setNewPerson(userdata);
}



    return (
    <div className={styles.form_container}>       
        <h2> Registration </h2>
        <form className="form" onSubmit={sendUsersData}>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">First Name</label>
                <div className="col-sm-5">
                    <input className={styles.input}
                     type="text"
                     placeholder="First Name"
                     name="firstname"
                     onChange={handleUserInputChange} required></input>
                </div>
            </div>
            <div className="form-group row">
                <label class="col-sm-3 col-form-label">Last Name</label>
                <div className="col-sm-5">
                    <input className={styles.input}
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    onChange={handleUserInputChange} required></input>
                </div>
            </div>
            <div className="form-group row">
                <label  class="col-sm-3 col-form-label">Age</label>
                <div className="col-sm-5">
                    <input className={styles.input}
                    type="text"
                    placeholder="Age"
                    name="age"
                    onChange={handleUserInputChange} required></input>
                </div>
            </div>
            <div className="form-group row">
                <label class="col-sm-3 col-form-label">Nationality</label>
                <div className="col-sm-5">
                    <input className={styles.input}
                     type="text"
                     placeholder="Nationality"
                     name="nationality"
                     onChange={handleUserInputChange} required></input>
                </div>
            </div>
            <div className="form-group row">
                <label class="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-5">
                    <input className={styles.input}
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleUserInputChange} required></input>
                </div>
            </div> 
            <div className="form-group row">
                <div lassName="col-sm-5">
                   <Button  className={styles.button}type="submit" variant="success" size="lg" >Submit</Button>
                </div>
            </div>
        </form> 
       
    </div>
       
     );
}

export default RegistrationForm;
