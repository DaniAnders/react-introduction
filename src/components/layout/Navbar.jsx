
import Button from 'react-bootstrap/Button';
import styles from  './Navbar.module.css';


const Navbar = (props) => {

    const handleClick = (event) => {
        props.changePage(event.target.value);
    };

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navlist}>
                <li className={styles.navitem}>
                    <Button variant="outline-primary" value='1' onClick={handleClick}>Registration Form</Button>
                </li>
                <li className={styles.navitem}>
                    <Button variant="outline-primary" value='2' onClick={handleClick}>Show Users List</Button>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;