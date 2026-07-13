import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Navbar.Brand className="d-flex align-items-center" href="https://github.com" target="_blank"> <FaGithub className="me-1" />
              Github Finder</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header