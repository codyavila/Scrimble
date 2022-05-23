import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Scrimble time!</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
