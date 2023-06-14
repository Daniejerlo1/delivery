import React from 'react'
import Header from './components/header/header'
import './App.scss'
import Nav from './components/nav/nav'
import Main from 'components/main/main'

function App() {
  return (
    <>
    <Header address='Rua Marechal Rondon, 399' phone='(85) 98908-1063'/> 
    <Nav/>
    <Main/>
    </>
  )

}

export default App