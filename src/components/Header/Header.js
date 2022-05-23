import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg='light' expand='lg' className='py-4'>
        <Container>
          <Navbar.Brand href='/'>SCRIMBLE</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart'><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
              <Nav.Link href='/sign-in'><i className='fas fa-user'></i>Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
