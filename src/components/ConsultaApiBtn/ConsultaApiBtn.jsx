import { use, useEffect, useState } from "react"
import styles from "./ConsultaApiBtn.module.css"

function ConsultaApiBtn() {

    const [pessoas, setPessoas] = useState([])
    const [carregando, setCarregando] = useState(false)
    const [erros, setError] = useState("")

    // Criando uma funcao async
    async function chamadaApi() {
        try {
            const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
            const dados = await resposta.json();
            setPessoas(dados); 
        } catch (erro) {
            console.error("Erro ao buscar dados:", erro);
        }
    }

    function ContainerPessoa({ pessoa }) {
        return (
            <div className={styles.item}>
                <h3>{pessoa.name}</h3>
                <p><strong>Email:</strong> {pessoa.email}</p>
                <p><strong>Cidade:</strong> {pessoa.address?.city}</p>
            </div>
        );
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.titulo}>Consulta de API</h1>
            <section className={styles.container}>
                <button className={styles.buscarButton} onClick={chamadaApi}>Consultar</button>
                <h2>Usuários da JSON Placeholder</h2>
                <div>
                    {/* o .map percorre a lista e retorna podemos retornar, diferente do foreach que nao é possivel */}
                    {pessoas.map((pessoa) => (
                        <ContainerPessoa key={pessoa.id} pessoa={pessoa} />
                    ))}
                </div>


            </section>

        </main>
    )
}


export default ConsultaApiBtn