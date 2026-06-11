import { use, useState } from 'react'
import styles from './Contador.module.css'

function Contador() {

    const [numeroAtual, setNumeroAtual] = useState(0)

    const aumentarContador = () => {
        setNumeroAtual(numeroAtual + 1)
    }

    const diminuirContador = () => {
        setNumeroAtual(numeroAtual - 1)
    }

    const reiniciarContador = () => {
        setNumeroAtual(0)
    }

    

    return (
        <>
            <div>
                <p>{numeroAtual}</p>
            </div>
            <div>
                <button onClick={diminuirContador}>Diminuir</button>
                <button onClick={reiniciarContador}>Reiniciar</button>
                <button onClick={aumentarContador}>Aumentar</button>
            </div>
        </>
    )
}

export default Contador