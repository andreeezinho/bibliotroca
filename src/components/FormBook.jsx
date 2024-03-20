import Inputs from "../components/Inputs";
import {FaImage} from "react-icons/fa";
import styles from "../css/FormBook.module.css";

function FormBook() {

    return(
        <div className={styles.divForm}>
            <h1>Insira os dados para concluir a troca!</h1>
            <form>
                <label htmlFor="imagem"><FaImage /> Insira uma foto do livro</label>
                <Inputs type="file" value="imagem" id="imagem" />
                <Inputs type="text" placeholder="Insira o nome do livro" />
                <Inputs type="text" placeholder="Insira o estado do livro" />
                <Inputs type="text" placeholder="Insira o seu telefone" />
                <input type="submit" value="Trocar" />
            </form>
        </div>
    )
}

export default FormBook;