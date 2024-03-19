import FormBook from "./FormBook";

import styles from "../css/BooksDetails.module.css";

function BookDetails({dados}) {
    return(
        <div className={styles.container}>
            <div className={styles.divInfo}>
                <h1>Detalhes do livro</h1>
                <div>
                    <img src={dados.imagem} alt={dados.imagem} />
                </div>
                    
                <div>
                    <p>{dados.name}</p>
                    <p>{dados.estado}</p>
                    <p>{dados.processamento}</p>
                    <p>{dados.disponibilidade}</p>
                    <p>Dono: <span>{dados.dono}</span></p>
                    <p>Local para troca: <span>{dados.local}</span></p>
                    {dados.contato !== "" ? (<p>Contato: <span>{dados.contato}</span></p>) : (<p></p>)}
                </div>
            </div>

            <FormBook />
        </div>
        
    )
}

export default BookDetails;