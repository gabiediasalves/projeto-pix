import styles from './pix.module.css'
import Input from '../layout/Input'
import React, { useState } from 'react';

function Pix({ handleSubmit, projectData }) {
   
    const [service, setService] = useState('');

    function handleChange(event) {
        setService(event.target.value);
    }

    function submit(e) {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    }

    return (
        <section className={styles.Pix_container}>
            <h1>Pix</h1>
            <h3>Dados Cadastrais</h3>

            <form onSubmit={submit}>
                <Input type="text"
                    text="Agencia"
                    name="name"
                    placeholder='Insira a agência do banco'
                    handleOnChange={handleChange}
                />

                <Input type="text"
                    text="CNPJ"
                    name="name"
                    placeholder='Insira o CNPJ do banco'
                    handleOnChange={handleChange}
                />

                <Input type="number"
                    text="Código"
                    name="name"
                    placeholder='Insira o código do banco'
                    handleOnChange={handleChange}
                />

                <Input type="text"
                    text="Nome Banco"
                    name="name"
                    placeholder='Insira o nome do banco'
                    handleOnChange={handleChange}
                />

            <button>Enviar</button>
            </form>
        </section >
    )
}

export default Pix