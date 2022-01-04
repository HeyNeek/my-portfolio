import React from 'react';
import { NavLink, Routes, Route, useLocation} from 'react-router-dom';

import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Navbar text="light" bg="transparent" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand id="navbarBrand">Nicholas Aguirre</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} id="about" to="/">About</Nav.Link>
              <Nav.Link as={NavLink} id="projects" to="/projects">Projects</Nav.Link>
              <Nav.Link as={NavLink} id="contact" to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br/>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} timeout={500} classNames="fade">
            <Routes location={location}>
              <Route exact path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1 id="errorURL">Error 404 Not Found</h1>} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
    </div>
  );
}

export default App;
