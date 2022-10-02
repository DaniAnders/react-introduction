import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {

    return (
       <footer className={styles.footer}>
          <ul className={styles.social_list}>
            <li>
            <FaFacebook/>
            </li>
            <li>
            <FaInstagram/>
            </li>
            <li>
            <FaLinkedin/>
            </li>
          </ul>
          <span> <strong> {new Date().getFullYear()} </strong> </span>
       </footer>
     
    )

}

export default Footer;