import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import Page from './components/Page';
import Detail from './components/Detail';
import data from './data';
import Detail2 from './components/Detail2';
import Tool from './components/Tool';
import Main from './components/Main';

export let StockContext = React.createContext();

function App() {
  let [shirts, setShirts] = useState(data);
  let [stock] = useState([7, 13, 20]);
  let [flag, setFlag] = useState(true);


  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
        <Container>
          
          <Navbar.Brand href="/">5조 미니플젝</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="찬수" id="basic-nav-dropdown">
                <NavDropdown.Item href="/page">
                  페이지
                </NavDropdown.Item>
                <NavDropdown.Item href="/detail2/0">
                  디테일
                </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="찬희" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Tool">
                  찬희메인
                </NavDropdown.Item>
                <NavDropdown.Item href="/detail/:GONGUSEQ/:SUBGONGUNAME/:GONGUNAME/:RENTALCOST/:GONGUCOUNT/:DETAILADDR/:TELEPHONE">
                  디테일
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ms-auto">반갑습니다. 5조입니다.</Nav>
        </Container>
      </Navbar>
       {/* <div className='col-md-2'>
        <div className='row'>
     
      </div>
      </div>  */}


      <Routes>
        <Route path='/' element={<Main></Main>}/>
        <Route path='/page' element={<Page/>}/>
        <Route
          path='/detail2/:id'
          element={
            <StockContext.Provider value={{ stock }}>
              <Detail2 shirts={shirts} />
            </StockContext.Provider>
          }/>
      </Routes>
      <Routes>
        <Route path='/Tool' element={<Tool/>}/>
        <Route path='/detail/:GONGUSEQ/:SUBGONGUNAME/:GONGUNAME/:RENTALCOST/:GONGUCOUNT/:DETAILADDR/:TELEPHONE' element={<Detail/>}/>
      </Routes>

    </div>
    
  );
}


export default App;
