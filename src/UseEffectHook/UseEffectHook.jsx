import { useEffect, useState } from "react";
import styles from "./UseEffectHook.module.css"

function UseEffectHook(){
    const[num, setNum] = useState(0)

    const titulo = 'Clicou '

    console.log('Sempre ocorre, mas antes do useEffect')

    useEffect(() => {
        console.log('Ocorre quando renderizar')
    });

    useEffect(() => {
        console.log('Ocorre quando renderizar a primeira vez')
    }, [])

    useEffect(() => {
        document.title = titulo + num
    }, [num])


    function adicionar(){
        setNum(num + 1)
    }
    return <button className={styles.contadorButton} onClick={() => setNum(num +1)}>{num}</button>
}

export default UseEffectHook