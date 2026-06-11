import { useState } from 'react'
import './App.css'
import Aluno from './components/Alunos/Alunos.jsx'
import Button from './components/Button/Button.jsx'
import Card from './components/Card/Card.jsx'
import Lista from './components/Lista/Lista.jsx'
import MsgUsuario from './components/MensagemUsuario/MsgUsuario.jsx'





function App() {
  return (
    <>
      {/* <Aluno nome={'Miguel'} idade={17} ativo={true} />
      <Aluno nome={'Carlos'} idade={23} ativo={false}/> */}
      <Button texto={'Cadastro'} />
      <Button texto={'Relatorio'} />
      <Card aluno={'Miguel'} curso={'CyberSecurity'} imagem={'https://placehold.co/400'}/>
      <Card aluno={'Carlos'} curso={'Cozinheiro'} imagem={'https://placehold.co/400'}/>
      <MsgUsuario nomeUsuario={'Miguel'} autenticado={true} />
      <MsgUsuario nomeUsuario={'Miguel'} autenticado={false} />
      <Lista/>
    </>
  )
};

export default App
