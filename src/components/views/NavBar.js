import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="mt-4 mb-4 rounded"
      >
        <Container>
          <Navbar.Brand to="/">Waiter.app</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
