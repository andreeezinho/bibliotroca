import React, { useState } from 'react';
import jsonData from "../../data/db.json";

import InputAdd from '../InputAdd';
import {FaImage} from "react-icons/fa"

import styles from "../../css/MyBooks.module.css";

function MyBooks() {

    const [formData, setFormData] = useState({
        imagem: '',
        name: '',
        estado: '',
        local: '',
        dono: '',
        contato: '',
      });

    const handleSubmit = (event) => {
        event.preventDefault();

        const newData = {
          id: jsonData.books.length + 1, 
          ...formData,
        }
        jsonData.books.push(newData);
        
        console.log(jsonData); 
        alert("Livro Adicionado na biblioteca!")
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return(
        <div className={styles.divForm}>
            <form onSubmit={handleSubmit}>
                <h1>Adicione mais livro para a nossa biblioteca!</h1>
                {/* <input type="text" name="name" value={formData.title} onChange={handleChange} /> */}
                <label htmlFor="img"><FaImage /> Insira uma foto do livro</label>
                <InputAdd type="file" name="imagem" value={formData.imagem} onChange={handleChange} id="img" />

                <InputAdd type="text" name="name" value={formData.name} onChange={handleChange} texto="Insira o nome do livro" />

                <InputAdd type="text" name="estado" value={formData.estado} onChange={handleChange} texto="Insira o estado do livro(Usado, novo)" />

                <InputAdd type="text" name="local" value={formData.local} onChange={handleChange} texto="Insira a sua cidade" />

                <InputAdd type="text" name="dono" value={formData.dono} onChange={handleChange} texto="Insira o seu nome" />

                <InputAdd type="number" name="contato" value={formData.contato} onChange={handleChange} texto="Insira o seu número de telefone" />

                <InputAdd type="submit" name="enviar" value="Enviar" />
            </form>
        </div>
    )
}

export default MyBooks;