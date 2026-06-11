import styles from './Button.module.css'

function Button({texto='Clique aqui'}) {
    return (
        <>
            <button className={styles.button}>{texto}</button>
        </>
    )
}

export default Button 