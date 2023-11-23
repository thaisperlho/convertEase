import React from 'react'
import GlobalStyle from './styles/global'
import { Header } from './components/Header'
import { Moedas } from './components/Moedas'
import { Form } from './components/Form'
import { Resultado } from './components/Resultado'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Moedas />
    <Form/>
    <Resultado/>
    <Footer/>
    <GlobalStyle />
    </>
    
  )
}

export default App