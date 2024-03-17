import jsonData from '../../data/db.json';

import styles from "../../css/Books.module.css";


function Books() {
    console.log(jsonData);

    return(
        <section className={styles.sectionContainer}>
            {jsonData.books.map((item) => (
                <div key={item.id} className={styles.divContainer}>
                    <div className={styles.divImg}>
                        <img src={item.imagem} alt={item.name} />
                    </div>

                    <div className={styles.divInfo}>
                        <h2>{item.name}</h2>
                        <p>{item.estado}</p>
                        <a href="###">Trocar</a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Books;