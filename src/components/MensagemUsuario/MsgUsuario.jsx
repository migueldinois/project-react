import styles from './MsgUsuario.module.css'

function MsgUsuario({autenticado=false, nomeUsuario='Senai'}){

    const msgAutenticado = <h1 className={styles.autenticado}>Bem vindo, {nomeUsuario}</h1>
    const msgNaoAutenticado = <h1 className={styles.naoAutenticado}>Usuário não encontrado.</h1>

    
    return (
        <>
            {autenticado ? msgAutenticado : msgNaoAutenticado}
        </>
    )
}

export default MsgUsuario