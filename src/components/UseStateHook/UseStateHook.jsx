import { use, useState } from 'react'
import styles from './UseStateHook.module.css'


function UseStateHook() {
    // 1. Inicializar o estado
    const [nome, setNome] = useState('Clique em mudar.');
    const [fruta, setFruta] = useState('Fruta secreta');
    const [idade, setIdade] = useState(0);
    const [eFalso, seteFalso] = useState(false)

    // 2. Atualizar o estado
    const atualizarNome = () => {
        setNome('Miguel');
    }

    const atualizarIdade = () => {
        setIdade(idade + 1);
    }

    const verificarEstado = () => {
        idade === 17 ? seteFalso(false) : seteFalso(true)
    }

    const mostrarFruta = () => {
        setFruta('Maça')
    }


    return (
        <>
            <p>Nome: {nome}</p>
            <button onClick={atualizarNome}>Mudar</button>

            <p>Idade: {idade}</p>
            <button onClick={atualizarIdade}>Incrementar</button>

            <p>É falso?: {eFalso ? 'Sim' : 'Não'}</p>
            <button onClick={verificarEstado}>Incrementar</button>

            <p>Nome: {fruta}</p>
            <button onClick={mostrarFruta}>Fruta secreta</button>

        </>
    )
}

export default UseStateHook

