import React, {Fragment, useState} from 'react';
import Button from 'react-bootstrap/Button';



const RegistrationForm = () => {

    const [userdata, setUserData] = useState(
       {
        firstname: '',
        lastname: '',
        age: '',
        nationality: '',
        email: '',
        key: 1
       }   
    )

    const [usertolist, setUserToList] = useState([])

    function list () {
        return (
            [
                ...usertolist,
            ]
        )     
    }

    const handleUserInputChange = (event) => {
        setUserData(prev => ({
            ...prev, 
            [event.target.name] : event.target.value

        }))
    }

      const sendUsersData = (event) => {

        alert( 'A form was submitted')
        event.preventDefault()
        event.target.reset()

        setUserToList([...usertolist, {
            ...userdata,
            [event.target.name] : event.target.value,
            key: Date.now()

        }])
}

       const buttonClicked = false;
       const showTable = () => {

       buttonClicked = true;

         /* return (
            usertolist.map((user) =><Fragment>
                       
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
    )*/

}
      
    

    return (
    <div>
          
        <h2> Registration </h2>

        <form className="form" onSubmit={sendUsersData}>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-5">
                    <input 
                     type="text"
                     placeholder="First Name"
                     name="firstname"
                     onChange={handleUserInputChange} ></input>
                </div>
            </div>
            <div className="form-group row">
                <label class="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-5">
                    <input 
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    onChange={handleUserInputChange} ></input>
                </div>
            </div>
            <div className="form-group row">
                <label  class="col-sm-2 col-form-label">Age</label>
                <div className="col-sm-5">
                    <input
                    type="text"
                    placeholder="Age"
                    name="age"
                    onChange={handleUserInputChange} ></input>
                </div>
            </div>
            <div className="form-group row">
                <label class="col-sm-2 col-form-label">Nationality</label>
                <div className="col-sm-5">
                    <input
                     type="text"
                     placeholder="Nationality"
                     name="nationality"
                     onChange={handleUserInputChange} ></input>
                </div>
            </div>
            <div className="form-group row">
                <label class="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-5">
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleUserInputChange} ></input>
                </div>
            </div> 
            <div className="form-group row">
                <div class="col-sm-2">
                   <button  type="submit" className="btn btn-success btn-lg btn-block" >Submit</button>
                </div>
            </div>
        </form>
        {/* <div className="col-sm-5">
           <button onClick={showTable}type="submit" className="btn btn-primary btn-lg btn-block" >Show Users</button>
        </div> */}
         
       
        {
            
        usertolist.map((user) =><div>
                       
        <table className="table table-hover ">
            <thead>
              <tr class="table-info">
                 <th scope="col">ID</th>
                 <th scope="col">First Name</th>
                 <th scope="col">Last Name</th>
                 <th scope="col">Age</th>
                 <th scope="col">Nationality</th>
                <th scope="col">Email</th>
             </tr>
            </thead>
            <tbody>
              <tr class="table-info">
                <th scope="row">{user.key}</th>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.age}</td>
                <td>{user.nationality}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
        </table>

    </div>)

        }
        
    
    </div>
       
     );
}

export default RegistrationForm;
