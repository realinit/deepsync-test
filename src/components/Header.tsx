import {
    Navbar,
    Nav,
} from "react-bootstrap";

export default function Header() {
    return (
        <Navbar
            variant="light"
            expand="lg"
            sticky="top"
            className="header__navbar"
        >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand className="logo" href="/">
                <img alt="" src="https://deepsync.co/images/logos/logo_light.png" />
                deepsync
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content">
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#Features" className="active">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav>
                <Nav.Link className="login__btn" href="#login">Login</Nav.Link>
            </Nav>
        </Navbar>
    )
}