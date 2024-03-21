import styles from "../../css/AboutUs.module.css";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

function AboutUs() {
    return(
        <div className={styles.container}>
            <div className={styles.texto}>
                <h1>Bibliotroca</h1>
                <p>
                    Bibliotroca é um site onde você pode trocar seus livros com os livros da nossa biblioteca online. 
                    É simples: basta escolher os livros da nossa biblioteca e trocar por um livro seu que nao deseja mais.  
                    Experimente a Bibliotroca e expanda sua coleção de livros de forma econômica e sustentável.
                </p>
            </div>

            <div className={styles.links}>
                <div>
                    <h2>Outras Informações</h2>
                    <p>Olá! Me chamo André e esse é um site criado por mim como um projeto de estudos.</p>
                    <p>Sou programador front-end, e o projeto foi desenvolvido com o framework Reactjs</p>
                    <p>Espero que tenha gostado, até mais :D</p>
                </div>
                <div className={styles.social}>
                    <a href="https://github.com/andreeezinho"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/andré-sapucaia-96476b2b1"><FaLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;