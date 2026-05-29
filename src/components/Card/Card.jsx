import styles from './card.module.css'

function Card({aluno='Nenhum', curso='Nenhum', imagem='https://placehold.co/400'}) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.foto__aluno}>
                    <img className={styles.img_aluno} src={imagem} alt={aluno} />
                </div>
                <div className={styles.info__aluno}>
                    <h1>Nome: {aluno}</h1>
                    <p>Curso: {curso}</p>
                </div>
            </div>
        </>
    )
}

export default Card