import { useEffect, useState } from "react"
import styles from "./ConsultaApiBtn.module.css"
import Swal from "sweetalert2"

function ContainerPessoa({ pessoa }) {
    return (
        <li className={styles.item}>
            <h3>{pessoa.name}</h3>
            <p><strong>Email:</strong> {pessoa.email}</p>
            <p><strong>Cidade:</strong> {pessoa.address?.city}</p>
        </li>
    );
}

function ConsultaApiBtn() {
    const [pessoas, setPessoas] = useState([])
    const [carregando, setCarregando] = useState(false)

    async function chamadaApi() {
        setCarregando(true)

        // Alerta de carregando
        Swal.fire({
            title: "Carregando...",
            text: "Seus dados estão sendo carregados",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        })

        try {
            // const resposta = await fetch('https://jsonplaceholder.typicode.com/users')
            const resposta = await fetch('https://httpbin.org/status/401')

            if (!resposta.ok) {
                if (resposta.status === 500) {
                    throw new Error("Erro 500: O banco de dados ou o servidor falhou.")
                }
                if (resposta.status === 401) {
                    throw new Error("Erro 401: Usuário não autorizado.")
                }
                throw new Error(`Erro ${resposta.status}: URL não encontrada ou inválida.`)
            }

            const dados = await resposta.json();
            setPessoas(dados);
            
            Swal.fire({
                title: "Sucesso",
                text: "Seus dados foram carregados com sucesso",
                icon: "success"
            });

        } catch (error) {
            if (error.message === "Failed to fetch" || !navigator.onLine) {
                
                Swal.fire({
                    icon: "error",
                    title: "Erro de conexão!",
                    text: "Não foi possível conectar ao servidor. Verifique sua conexão de internet.",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Tentar Novamente"
                }).then((result) => {
                    if (result.isConfirmed) {
                        chamadaApi()
                    }
                })
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Algo deu errado!",
                    text: error.message,
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Tentar Novamente"
                }).then((result) => {
                    if (result.isConfirmed) {
                        chamadaApi()
                    }
                })
            }
        } finally {
            setCarregando(false)
        }
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.titulo}>Consulta de API</h1>
            <section className={styles.container}>
                <button className={styles.buscarButton} onClick={chamadaApi} disabled={carregando}>
                    {carregando ? "Carregando..." : "Consultar"}
                </button>
                <h2>Usuários da JSON Placeholder</h2>
                {carregando && <p>Carregando usuários...</p>}
                {!carregando && (
                    <ul className={styles.lista}>
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
