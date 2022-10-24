import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
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
            <li>
            <AiFillGithub/>
            </li>
          </ul>
          <span className={styles.social_list}>   <strong>© {"Created by Danielle Andersson"}</strong></span>
       </footer>
     
    )

}

export default Footer;