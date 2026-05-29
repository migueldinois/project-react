import styles from './button.module.css'

function Button({texto='Clique aqui'}) {
    return (
        <>
            <button className={styles.button}>{texto}</button>
        </>
    )
}

export default Button 