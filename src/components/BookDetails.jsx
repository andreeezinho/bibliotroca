import styles from "../css/BooksDetails.module.css";

function BookDetails({dados}) {
    return(
        <div>
            <h1>Detalhes do Livro</h1>
            <img src={dados.imagem} alt={dados.imagem} />
            <p>Nome: {dados.name}</p>
            <p>Estado: {dados.estado}</p>
            <p>Processamento: {dados.processamento}</p>
        </div>
    )
}

export default BookDetails;