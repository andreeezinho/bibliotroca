import { Link } from "react-router-dom";

import styles from '../../css/Navbar.module.css';
import stylesMedia from '../../css/media-query/NavbarMedia.module.css';
import icone from '../../img/IconeBranco.png';

function Navbar() {
    return(
            <nav className={styles.navbar}>
                <Link to="/"><img src={icone} alt="Logo-icone" /></Link>

                <input type="checkbox" id="check" />
                <label for="check" className={`${stylesMedia.check} ${styles.ver}`}> &equiv;</label> 

                <ul className={styles.ulDesktop}>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/books"> Livros </Link></li>
                    <li><Link to="/mybooks"> Meus Livros</Link></li>
                    <li><Link to="/aboutus"> Sobre Nós </Link></li>
                </ul>

                <div className={`${stylesMedia.menu} ${styles.menuMobile}`}>
                    <label for="check" className={`${stylesMedia.check} ${styles.ver}`}>x</label>
                    <ul className={stylesMedia.ulMobile}>
                        <li><Link to="/"> Home </Link></li>
                        <li><Link to="/books"> Livros </Link></li>
                        <li><Link to="/mybooks"> Meus Livros</Link></li>
                        <li><Link to="/aboutus"> Sobre Nós </Link></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;