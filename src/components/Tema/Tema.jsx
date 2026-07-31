import { useState, useEffect } from "react"
import styles from "./Tema.module.css"


function Tema() {
    // CASOS DE USO DO useState

    // Caso 1: contador
    const [contador, setContador] = useState(0)

    // Caso 2: texto digitado pelo usuario
    const [inputNome, setInputNome] = useState('');
    const [nome, setNome] = useState("visitante")

    // Caso 3: controle de tema
    const [temaEscuro, setTemaEscuro] = useState(false)

    // Casos de uso useeffect

    // Caso 1: Executa apenas uma vez, ao carrregar o componente
    useEffect(() => {
        console.log('Componente carregado pela primeira vez')
    }, [])
    // Caso 2: Executa sempre que o contador mudar
    useEffect(() => {
        console.log(`O contador foi alterado para: ${contador}`)
    }, [contador])

    useEffect(() => {
        console.log(`Tema alterado: ${temaEscuro ? 'Escuro' : 'Claro'}`)
    }, [temaEscuro])

    // Funcao para aumentar o contador
    function aumentarContador() {
        setContador(contador + 1)
    }

    // Funcao para diminuir o contador
    function diminuirContador() {
        setContador(contador - 1)
    }

    // Function alterar o tema
    function alterarTema() {
        if (temaEscuro) {
            setTemaEscuro(false)
        } else {
            setTemaEscuro(true)
        }

        
        
    }
    // Funcao para alterar nome
    function alterarNome() {
        
        // Utilizamo trim para tirar todos os espaços, se for diferente de espaços, ele seta o nome com o valor do input
        if (inputNome.trim() !== '') {
            setNome(inputNome);
        }
    }
    
    return (
        <main className={`${styles.container} ${temaEscuro ? styles.temaEscuro : styles.temaClaro}`}>
            <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>

            {/* Caso1: Contador */}
            <section className={styles.card}>
                <h2 >1. Contador (useState)</h2>
                <span className={styles.valor}>{contador}</span>
                <div>
                    <button className={styles.botaoTema} onClick={diminuirContador}>-</button>
                    <button className={styles.botaoTema} onClick={aumentarContador}>+</button>
                </div>
                <p>O useEffect observa a variável contador e executa sempre que ela muda</p>

            </section>

            {/* Caso 2: Campo de texto */}
            <section className={styles.card}>
                <h2>2. Campo de texto (useState)</h2>
                {/* Esse on change utilizado no input, ele muda o useState inputNome e  */}
                <input className={`${styles.input}`} type="text" placeholder="Digite seu nome" value={inputNome} onChange={(evento) => setInputNome(evento.target.value)} />
                <p>Olá, <b>{nome}</b></p>
                <button className={styles.botaoTema} onClick={alterarNome}>Enviar</button>
            </section>

            {/* Caso 3: Alternancia de tema */}
            <section className={styles.card}>
                <h2>Alternância de tema (useState)</h2>
                <button onClick={alterarTema}>Alternância para tema {temaEscuro ? 'Escuro' : 'Claro'}</button>
                <p>O useEffect observa a variável temaEscuro e executa sempre que o tema é alterado</p>
            </section>
        </main>
    );
}

export default Tema