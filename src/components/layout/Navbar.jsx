import { Link } from "react-router-dom";

import styles from '../../css/Navbar.module.css';
import icone from '../../img/IconeBranco.png';

function Navbar() {
    return(
            <nav className={styles.navbar}>
                <Link to="/"><img src={icone} alt="Logo-icone" /></Link>
            </nav>
    )
}

export default Navbar;