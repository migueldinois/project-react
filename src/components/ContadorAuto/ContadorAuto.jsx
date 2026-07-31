import { use, useEffect, useState } from "react"
import styles from "./ContadorAuto.module.css"

function Contador() {
    const [num, setNum] = useState(0)
    const [automatico, setAutomatico] = useState(false)

    const addNum = () => {
        setNum(num + 1)
    }

    const subtrairNum = () => {
        setNum(num - 1)
    }

    const resetNum = () => {
        setNum(0)
    }

    const sortearNum = () => {
        setNum(Math.floor(Math.random() * 100) + 1)
    }

    useEffect(() => {
        let relogio
        if (automatico) {
            relogio = setInterval(() => {
                setNum((num) => num + 1)
            }, 1000);
        }

        return () => clearInterval(relogio)
    }, [automatico])

    const alternarAutomatico = () => {
        setAutomatico(!automatico)
    }

    const obterClasse = () => {
        if (num > 0) return styles.spanPositivo
        if (num < 0) return styles.spanNegativo
        return styles.span
    }



    const formatarContador = () => {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }
        return num;
    }


    return (
        <>
            <div className={styles.container}>
                <span className={obterClasse()}>{formatarContador()}</span>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={addNum}>Adicionar</button>
                    <button className={styles.button} onClick={subtrairNum}>Subtrair</button>
                    <button className={styles.button} onClick={resetNum}>Reiniciar</button>
                    <button className={styles.button} onClick={sortearNum}>Sortear</button>
                    <button className={automatico ? styles.buttonAtivo : styles.contadorButton} onClick={alternarAutomatico}>{automatico ? 'Parar' : 'Contador'}</button>
                </div>
            </div>

        </>
    )
}

export default Contador

