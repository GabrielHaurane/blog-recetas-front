import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../components/img/icon.webp";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" className="backC">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to='/'>
          <img
            src={logo}
            alt="logo Rolling Coffee"
            className="img-fluid"
            width={100}
          />
        </Navbar.Brand>
        <NavLink end className='nav-link fs-2' to="/">Las Resetas de Gabote</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto w-50 d-flex justify-content-end">
            <NavLink end className='nav-link fs-5' to='/'>Inicio</NavLink>
            <NavLink end className='nav-link fs-5' to='/administrador'>Administrador</NavLink>
            <NavLink end className='nav-link fs-5' to='/login'>Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
