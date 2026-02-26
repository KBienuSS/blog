import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavB from 'react-bootstrap/Navbar';

const Navbar = () =>{ 
    return (
    <NavB bg="primary" data-bs-theme="dark" expand="lg" className="rounded">
      <Container>
        <NavB.Brand href="#home" className="text-white">Blog.app</NavB.Brand>
        <NavB.Toggle aria-controls="basic-navbar-nav" />
        <NavB.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="text-white">About</Nav.Link>
          </Nav>
        </NavB.Collapse>
      </Container>
    </NavB>
  );
}

export default Navbar;