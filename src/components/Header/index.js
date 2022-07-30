import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../../assets/images/logo.png';
import './style.css';
import { Link } from "react-scroll";

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' variant='dark' >
                <Container>
                    <div>
                        <Navbar.Collapse>
                            <Nav>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={100}
                                    to="banner"
                                >Início
                                </Link>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={100}
                                    to="characters"
                                >Personagens
                                </Link>
                            </Nav>
                            <img className="header-logo" alt='logo' src={Logo} />
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;