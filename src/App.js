import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import Page from './components/Page';
import Detail from './components/Detail2';
import data from './data';
import Detail2 from './components/Detail2';

export let StockContext = React.createContext();

function App() {
  let [shirts, setShirts] = useState(data);
  let [stock] = useState([7, 13, 20]);


  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
        <Container>
          
          <Navbar.Brand href="#home">5조 미니플젝</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="찬수" id="basic-nav-dropdown">
                <NavDropdown.Item href="/page">
                  페이지
                </NavDropdown.Item>
                <NavDropdown.Item href="/about/location">
                  찾아오시는길
                </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="찬희" id="basic-nav-dropdown">
                <NavDropdown.Item href="/event/one">
                  이벤트1
                </NavDropdown.Item>
                <NavDropdown.Item href="/event/two">
                  이벤트2
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ms-auto">반갑습니다.</Nav>
        </Container>
      </Navbar>

      
      <Routes>
        <Route path='/page' element={<Page/>}/>
        <Route
          path='/detail2/:id'
          element={
            <StockContext.Provider value={{ stock }}>
              <Detail2 shirts={shirts} />
            </StockContext.Provider>
          }/>
      </Routes>
      

    </div>
    
  );
}


export default App;
