import {Link} from 'react-router-dom';

import styles from "../../css/Home.module.css";
import img from "../../img/ImgHome.png";

function Home() {
    return(
        <section className={styles.sectionContainer}>
            <div className={styles.imgHome}>
                <img src={img} alt="" />
            </div>

            <div className={styles.frases}>
                <h1>Bem vindo à <span>Bibliotroca!</span></h1>
                <p>Aqui você pode trocar seus livros!</p>
                <Link to="/books">Busque Livros!</Link>
            </div>
        </section>
    )
}

export default Home;