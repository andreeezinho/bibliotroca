import jsonData from '../../data/db.json';

import stytles from "../../css/Books.module.css";


function Books() {
    console.log(jsonData);

    
    return(
        <section className={stytles.sectionContainer}>
                {jsonData.books.map((item) => (
                    <div key={item.id}>
                        <img src={item.imagem} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>Estado: {item.estado}</p>
                        <p>Processamento: {item.processamento}</p>
                    </div>
                ))}
        </section>
    )
}

export default Books;