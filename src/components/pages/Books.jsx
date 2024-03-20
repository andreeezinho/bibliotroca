import React from 'react';
import jsonData from '../../data/db.json';
import { useState } from 'react';

import BookDetails from "../BookDetails.jsx";
import styles from "../../css/Books.module.css";


function Books() {
    console.log(jsonData);

    const [selectedBook, setSelectedBook] = useState(null);

    const handleBookClick = (book) => {
        setSelectedBook(book);
    };

    const handleBookClose = () => {
        setSelectedBook(null);
    };

    return(
        <>
            {selectedBook && (
                <section id="detalhes" className={styles.detalhes}>
                    <BookDetails dados={selectedBook} />
                    <button onClick={() => handleBookClose(null)}>Fechar</button>
                </section>
            )}

            <section className={styles.sectionContainer}>
                {jsonData.books.map((item) => (
                    <div key={item.id} className={styles.divContainer}>
                        <div className={styles.divImg}>
                            <img src={item.imagem} alt={item.name} />
                        </div>

                        <div className={styles.divInfo}>
                            <h2>{item.name}</h2>
                            <p>{item.estado}</p>
                            <a href="#detalhes"><button onClick={() => handleBookClick(item)}>Trocar</button></a>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Books;