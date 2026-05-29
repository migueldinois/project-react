import { useState } from 'react'
import './App.css'
import Aluno from './components/Alunos/Alunos.jsx'
import Button from './components/Button/Button.jsx'
import Card from './components/Card/Card.jsx'
import Lista from './components/Lista/Lista.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Aluno nome={'Miguel'} idade={17} ativo={true} />
      <Aluno nome={'Carlos'} idade={23} ativo={false}/> */}
      <Button texto={'Cadastro'} />
      <Button texto={'Relatorio'} />
      <Card aluno={'Miguel'} curso={'CyberSecurity'} imagem={'https://placehold.co/400'}/>
      <Lista/>
    </>
  )
};

export default App
