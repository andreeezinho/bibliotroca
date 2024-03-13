import { Link } from "react-router-dom";

import {FaHome} from 'react-icons/fa';
import {FaBook} from 'react-icons/fa';
import {FaBookOpen} from 'react-icons/fa';
import {FaInfoCircle} from 'react-icons/fa';
import stylesMedia from '../../css/media-query/NavbarMedia.module.css';


function Footer() {
    return(
        <footer className={stylesMedia.footer}>
            <nav className={stylesMedia.navbar}>
                <div className={stylesMedia.menu}>
                    <ul className={stylesMedia.ulMobile}>
                        <li>
                            <Link to="/"><FaHome /> Home </Link>
                        </li>

                        <li>
                            <Link to="/books"><FaBook /> Livros </Link>
                        </li>

                        <li>
                            <Link to="/mybooks"><FaBookOpen /> Meus Livros</Link>
                        </li>

                        <li>
                            <Link to="/aboutus"><FaInfoCircle /> Sobre Nós </Link>
                        </li>
                    </ul>
                </div> 
            </nav>
        </footer>
    )
}

export default Footer;