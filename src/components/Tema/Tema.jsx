import { useState, useEffect } from "react"
import styles from "./Tema.module.css"


function Tema() {
    // CASOS DE USO DO useState

    // Caso 1: contador
    const [contador, setContador] = useState(0)

    // Caso 2: texto digitado pelo usuario
    const [nome, setNome] = useState("")

    // Caso 3: controle de tema
    const [temaEscuro, setTemaEscuro] = useState(false)

    // Casos de uso useeffect

    // Caso 1: Executa apenas uma vez, ao carrregar o componente
    useEffect(() => {

    }, [])
    // Caso 2: Executa sempre que o contador mudar
    useEffect(() => {

    }, [])

    useEffect(()=> {

    }, [temaEscuro])

    // Funcao para aumentar o contador
    function aumentarContador(){
        setContador(contador + 1)
    }

    // Funcao para diminuir o contador
    function diminuirContador(){
        setContador(contador - 1)
    }

    // Function alterar o tema
    function alterarTema(){

    }

    return (
        <main className={`${styles.container} ${temaEscuro ? styles.temaEscuro : styles.temaClaro}`}>
            <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>

            {/* Caso1: Contador */}
            <section className={styles.card}>
            </section>

            {/* Caso 2: Campo de texto */}
            <section className={styles.card}>
            </section>

            {/* Caso 3: Alternancia de tema */}
            <section className={styles.card}></section>
        </main>
    );
}

export default Tema