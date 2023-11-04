import React from 'react'
import GlobalStyle from './styles/global'
import { Header } from './components/Header'
import { Moedas } from './components/Moedas'

const App = () => {
  return (
    <>
    <Header />
    <Moedas />
    <GlobalStyle />
    </>
    
  )
}

export default App