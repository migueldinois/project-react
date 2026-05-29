// Importando CSS
import styles from './alunos.module.css'

function Aluno({nome='Vazio', idade='0', ativo=false}){
    return(

        <>
        
            <div className={styles.lista}>
                <p>Nome: {nome}</p>
                <p>Idade: {idade}</p>
                <p>Ativo: {ativo ? 'Sim' : 'Não'}</p>
            </div>
        </>
    )
}


export default Aluno