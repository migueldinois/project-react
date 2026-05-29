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
      <Aluno />
      <Button />
      <Card/>
      <Lista/>
    </>
  )
};

export default App
