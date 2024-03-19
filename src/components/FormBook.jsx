import Inputs from "../components/Inputs";
import styles from "../css/FormBook.module.css";

function FormBook() {

    return(
        <div className={styles.divForm}>
            <h1>Insira os dados para concluir a troca!</h1>
            <form>
                <span>Insira imagem</span>
                <Inputs type="file" value="imagem" id="imagem" />
                <Inputs type="text" placeholder="Insira o nome do livro" />
                <Inputs type="text" placeholder="Insira o estado do livro" />
                <Inputs type="text" placeholder="Insira o telefone" />
                <Inputs type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default FormBook;