
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import styles from  './Navbar.module.css';
import {Link} from 'react-router-dom';
import React, { useContext} from "react";
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {

    const { token } = useContext(AuthContext);
    const { user } = useContext(AuthContext);


    return (
        <>
        <Nav fill variant="tabs" className={styles.navbar}>
        <div className={styles.logo}>
          {(token.length !== 0) ? (<h4>Welcome, {user}</h4>) : (<p></p>) }
        </div>
    
            <Nav.Item className={styles.navitem}>
                <Link to='/' style={{ textDecoration: 'none', color: '#FFF'}}>Home</Link>
            </Nav.Item>
            <Nav.Item className={styles.navitem}>
                <Link to='/registration' style={{ textDecoration: 'none', color: '#FFF' }}>Registration</Link>
            </Nav.Item>
            <Nav.Item className={styles.navitem}>
                <Link to='/personlist' style={{ textDecoration: 'none', color: '#FFF' }}>Persons List</Link>
            </Nav.Item>
            {(token.length !== 0) ? ( 
            <Nav.Item className={styles.navitem}>
                 <Link to='/logout' style={{ textDecoration: 'none', color: '#FFF' }}>Logout</Link>
            </Nav.Item>  
            ) : (
            <Nav.Item className={styles.navitem}>
                <Link to='/login' style={{ textDecoration: 'none', color: '#FFF' }}>Login</Link>
            </Nav.Item>
            )}
            <Nav.Item className={styles.navitem}>
                 <Button variant="primary" size="sm">Change Theme</Button>
            </Nav.Item>
        </Nav>
        </>
    )
}


export default Navbar;