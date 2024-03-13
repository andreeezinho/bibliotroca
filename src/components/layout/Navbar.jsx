import { Link } from "react-router-dom";

import styles from '../../css/Navbar.module.css';
import icone from '../../img/IconeBranco.png';

function Navbar() {
    return(
            <nav className={styles.navbar}>
                <Link to="/"><img src={icone} alt="Logo-icone" /></Link>

                <ul className={styles.ulDesktop}>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/books"> Livros </Link></li>
                    <li><Link to="/mybooks"> Meus Livros</Link></li>
                    <li><Link to="/aboutus"> Sobre Nós </Link></li>
                </ul>
            </nav>
    )
}

export default Navbar;