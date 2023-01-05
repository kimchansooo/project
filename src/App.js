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

export let StockContext = React.createContext();

function App() {
  let [shirts, setShirts] = useState(data);
  let [stock] = useState([7, 13, 20]);


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
      {/* <div className='col-md-8 col-sm-12'>
        <div className='row'>
      <img src='https://w.namu.la/s/939277e2b6d14bc7ecaf94d189458e1b68b7f538dd1c258acf04290b84db93875e6d4101b5cc21a0b7dcc45513758c18503e58fc6f53277c6d0898cef44c3e75defbde69d95c1691ea3c6c18542ec5badcc270d138b873f1bf36fb952d40398e414f3e545410281a0280aac2cbfba11a'/>
      <img src='https://e7.pngegg.com/pngimages/560/216/png-clipart-book-graphics-illustration-book-book-reading.png'/>
      </div>
      </div> */}
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
      <Routes>
        <Route path='/Tool' element={<Tool/>}/>
        <Route path='/detail/:GONGUSEQ/:SUBGONGUNAME/:GONGUNAME/:RENTALCOST/:GONGUCOUNT/:DETAILADDR/:TELEPHONE' element={<Detail/>}/>
      </Routes>

    </div>
    
  );
}


export default App;
