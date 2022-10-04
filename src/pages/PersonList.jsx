import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function PersonList({props}) {


  const handleClick = (event, key) => {
    alert( 'Clicked');
   
};


    return(
        <div>
            <h1>PersonList page</h1>
          <nav>
            <ul className="personlist">
              {props.map((user) => (
                <li key={user.key} onClick={handleClick(user.key)}>
                  <a  href={`personlist/${user.firstname}${user.lastname}`}>{user.firstname} {user.lastname}</a>
                  {user.firstname} {user.lastname}
                </li>
              ))}
            </ul>
          </nav>
        </div>
    )
}

export default PersonList;