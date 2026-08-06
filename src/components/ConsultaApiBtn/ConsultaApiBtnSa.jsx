import { use, useEffect, useState } from "react"
import styles from "./ConsultaApiBtn.module.css"
import Swal from "sweetalert2"




function ConsultaApiBtn() {

    const [pessoas, setPessoas] = useState([])
    const [carregando, setCarregando] = useState(false)
    const [erros, setErros] = useState("")


    // Criando uma funcao async
    async function chamadaApi() {
        setCarregando(true)
        setErros("")
        try {

            const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
            // const resposta = await fetch('https://httpbin.org/status/401')

            if (!resposta.ok) {

                if (resposta.status === 500) {
                    throw new Error("Erro 500: O banco de dados o servidor falhou")

                }
                if (resposta.status === 401) {
                    throw new Error("Erro 401: Usuário não autorizado.")

                }
                throw new Error(`Erro ${resposta.status}: URL não encontrada o inválida`)
            }
            const dados = await resposta.json();
            setPessoas(dados);
            setCarregando(false)
        } catch (error) {
            if (error.message === "Failed to fetch" || !navigator.onLine) {
                Swal.fire({
                    icon: "error",
                    title: "Algo deu errado!",
                    description: "Não foi possível conectar ao servidor. Verifique sua conexão de internet.",
                    showConfirmButton: false,
                    timer: 1500
                })
                setErros("Não foi possível conectar ao servidor. Verifique sua conexão de internet.");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Algo deu errado!",
                    description: error.message,
                    showConfirmButton: false,
                    timer: 1500
                })
                setErros(error.message)
            }

        }
        finally {
            Swal.fire({
                icon: "success",
                title: "Dados carregados com sucesso",
                showConfirmButton: false,
                timer: 1500
            });
            setCarregando(false)
        }
    }

    function ContainerPessoa({ pessoa }) {
        return (
            <li className={styles.item}>
                <h3>{pessoa.name}</h3>
                <p><strong>Email:</strong> {pessoa.email}</p>
                <p><strong>Cidade:</strong> {pessoa.address?.city}</p>
            </li>
        );
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.titulo}>Consulta de API</h1>
            <section className={styles.container}>
                <button className={styles.buscarButton} onClick={chamadaApi}>{carregando ? "Carregando" : "Consultar"}</button>
                <h2>Usuários da JSON Placeholder</h2>
                {carregando && <p>Carregando usuários...</p>}
                {erros && <p className={styles.erro}>{erros}</p>}
                {!carregando && !erros && (
                    <ul className={styles.lista}>
                        {/* o .map percorre a lista e retorna podemos retornar, diferente do foreach que nao é possivel */}
                        {pessoas.map((pessoa) => (
                            <ContainerPessoa key={pessoa.id} pessoa={pessoa} />
                        ))}
                    </ul>
                )}


            </section>

        </main>
    )
}


export default ConsultaApiBtn