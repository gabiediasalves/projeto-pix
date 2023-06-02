import React, { useState, useEffect } from "react";

function Teste() {
    const [formData, setFormData] = useState({
        agencia: "456",
        banco: {
            CNPJ: "23456789000142",
            codigo: "341",
            nome: "Itau"
        },
        dvAgencia: "9",
        dvConta: "X",
        id: 1,
        numero: "987",
        tipoConta: "POUPANCA",
        titular: {
            CPF: "00000123456",
            RG: "12365498",
            emails: [
                {
                    email: "tiago.gadotti@gmail.com",
                    pessoa: null
                },
                {
                    email: "ti.gadotti@gmail.com",
                    pessoa: null
                }
            ],
            enderecos: [
                {
                    enderecoCompleto: "Rua Joinville, 221, Ascurra, SC",
                    id: null,
                    pessoa: null
                }
            ],
            id: null,
            nome: "Tiago Gadotti",
            nomeMae: "Roselene Gadotti",
            nomePai: "Odair Gadotti",
            telefones: [
                {
                    id: null,
                    numero: "47988907634",
                    pessoa: null
                }
            ]
        }
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name.startsWith("titular.emails")) {
            const [, index, nestedField] = name.split(".");
            const updatedEmails = [...formData.titular.emails];
            updatedEmails[index][nestedField] = value;

            setFormData((prevFormData) => ({
                ...prevFormData,
                titular: {
                    ...prevFormData.titular,
                    emails: updatedEmails
                }
            }));
        } else if (name.startsWith("titular.enderecos")) {
            const [, index, nestedField] = name.split(".");
            const updatedEnderecos = [...formData.titular.enderecos];
            updatedEnderecos[index][nestedField] = value;

            setFormData((prevFormData) => ({
                ...prevFormData,
                titular: {
                    ...prevFormData.titular,
                    enderecos: updatedEnderecos
                }
            }));
        } else if (name.startsWith("titular.telefones")) {
            const [, index, nestedField] = name.split(".");
            const updatedTelefones = [...formData.titular.telefones];
            updatedTelefones[index][nestedField] = value;

            setFormData((prevFormData) => ({
                ...prevFormData,
                titular: {
                    ...prevFormData.titular,
                    telefones: updatedTelefones
                }
            }));

        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                titular: {
                    ...prevFormData.titular,
                    [name]: value
                }
            }));
        }
    };

    const addTelefone = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            titular: {
                ...prevFormData.titular,
                telefones: [
                    ...prevFormData.titular.telefones,
                    {
                        id: null,
                        numero: "",
                        pessoa: null
                    }
                ]
            }
        }));
    };


    const [dados, setDados] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/dados');
                const data = await response.json();
                setDados(data);
            } catch (error) {
                console.error('Erro ao obter os dados:', error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(formData));
        localStorage.setItem("dados", JSON.stringify(formData))
        // Enviar a requisição HTTP com os dados
        fetch("http://192.168.0.66:8095/api/cadastrarConta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                // Processar a resposta da API, se necessário
                console.log(data);
            })
            .catch((error) => {
                // Lidar com erros de requisição
                console.error(error);
            });
     };

    return (
        <div>
            <h1>Formulário</h1>
            <form onSubmit={handleSubmit}>
                {/* Renderizar os campos do formulário */}
                <label>
                    Agência:
                    <input
                        type="text"
                        value={formData.agencia}
                        onChange={(e) =>
                            setFormData({ ...formData, agencia: e.target.value })
                        }
                    />
                </label>
                <br></br>

                <label>
                    CNPJ do Banco:
                    <input
                        type="text"
                        value={formData.banco.CNPJ}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                banco: { ...formData.banco, CNPJ: e.target.value }
                            })
                        }
                    />
                </label>

                <br></br>

                <label>
                    Código do Banco:
                    <input
                        type="text"
                        value={formData.banco.codigo}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                banco: { ...formData.banco, codigo: e.target.value }
                            })
                        }
                    />
                </label>

                <br></br>

                <label>
                    dvAgencia:
                    <input
                        type="text"
                        value={formData.dvAgencia}
                        onChange={(e) =>
                            setFormData({ ...formData, dvAgencia: e.target.value })
                        }
                    />
                </label>

                <br></br>
                <label>
                    dvConta:
                    <input
                        type="text"
                        value={formData.dvConta}
                        onChange={(e) =>
                            setFormData({ ...formData, dvConta: e.target.value })
                        }
                    />
                </label>

                <br></br>
                <label>
                    id:
                    <input
                        type="text"
                        value={formData.id}
                        onChange={(e) =>
                            setFormData({ ...formData, id: e.target.value })
                        }
                    />
                </label>
                <br></br>

                <label>
                    numero:
                    <input
                        type="text"
                        value={formData.numero}
                        onChange={(e) =>
                            setFormData({ ...formData, numero: e.target.value })
                        }
                    />
                </label>
                <br></br>

                <label>
                    tipoConta:
                    <input
                        type="text"
                        value={formData.tipoConta}
                        onChange={(e) =>
                            setFormData({ ...formData, tipoConta: e.target.value })
                        }
                    />
                </label>
                <br></br>

                <label>
                    Código do Banco:
                    <input
                        type="text"
                        value={formData.banco.codigo}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                banco: { ...formData.banco, codigo: e.target.value }
                            })
                        }
                    />
                </label>
                <br></br>

                <label>
                    CPF do Titular:
                    <input
                        type="text"
                        value={formData.titular.CPF}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                titular: { ...formData.titular, CPF: e.target.value }
                            })
                        }
                    />
                </label>

                <br></br>

                <label>
                    RG do Titular:
                    <input
                        type="text"
                        value={formData.titular.RG}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                titular: { ...formData.titular, RG: e.target.value }
                            })
                        }
                    />
                </label>

                <br></br>

                {/* Campos de e-mail */}
                {formData.titular.emails.map((email, index) => (
                    <div key={index}>
                        <label>
                            E-mail {index + 1}:
                            <input
                                type="text"
                                name={`titular.emails.${index}.email`}
                                value={email.email}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                ))}


                {/* Campos de endereço */}
                {formData.titular.enderecos.map((endereco, index) => (
                    <div key={index}>
                        <label>
                            Endereço {index + 1}:
                            <input
                                type="text"
                                name={`titular.enderecos.${index}.enderecoCompleto`}
                                value={endereco.enderecoCompleto}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                ))}

                {/* Botão para adicionar novo campo de endereço */}
                <button
                    type="button"
                    onClick={() =>
                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            titular: {
                                ...prevFormData.titular,
                                enderecos: [
                                    ...prevFormData.titular.enderecos,
                                    {
                                        enderecoCompleto: "",
                                        id: null,
                                        pessoa: null
                                    }
                                ]
                            }
                        }))
                    }
                >
                    Adicionar Endereço
                </button>

                <br></br>
                <label>
                    nome:
                    <input
                        type="text"
                        value={formData.nome}
                        onChange={(e) =>
                            setFormData({ ...formData, nome: e.target.value })
                        }
                    />
                </label>

                <br></br>
                <label>
                    nomeMae:
                    <input
                        type="text"
                        value={formData.nomeMae}
                        onChange={(e) =>
                            setFormData({ ...formData, nomeMae: e.target.value })
                        }
                    />
                </label>
                <br></br>

                <label>
                    nomePai:
                    <input
                        type="text"
                        value={formData.nomePai}
                        onChange={(e) =>
                            setFormData({ ...formData, nomePai: e.target.value })
                        }
                    />
                </label>
                <br></br>

                {/* Campos de telefones */}
                {formData.titular.telefones.map((telefone, index) => (
                    <div key={index}>
                        <label>
                            Telefone {index + 1}:
                            <input
                                type="text"
                                name={`titular.telefones[${index}].numero`}
                                value={telefone.numero}
                                onChange={(event) => handleChange(event, index)}
                            />
                        </label>
                    </div>
                ))}

                {/* Botão para adicionar novo campo de telefone */}
                <button type="button" onClick={addTelefone}>
                    Adicionar Telefone
                </button>


                <button type="submit">Enviar</button>
            </form >
        </div >
    );
}

export default Teste;
