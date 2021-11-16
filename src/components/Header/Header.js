import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { NavLink } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { AllContexts, selectedCourse } = useAuth();
    const { user, logOut } = AllContexts;
    const { displayName } = user;
    return (
        <div className="sticky-top">
            <Navbar bg="white" expand="lg" sticky="top">
                <Container>
                    <NavLink to="/home">
                        <Navbar.Brand >
                            <img width='250px' height='80px' src={logo} alt="Logo" />
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                            {/* <NavDropdown title="Services" id="basic-nav-dropdown">

                                <NavDropdown.Item>
                                    <NavLink className="text-decoration-none" to={`/appoint/5`}
                                    >DNA Fingerprint</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="text-decoration-none" to={`/appoint/2`}
                                    >Heart Care</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="text-decoration-none" to={`/appoint/9`}
                                    >Medicine</NavLink>
                                </NavDropdown.Item>

                            </NavDropdown> */}
                            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>

                            {/* <Nav.Link as={NavLink} to="/cart" className='custom-logo'>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <Badge className='badge'>{selectedCourse.length}</Badge>
                            </Nav.Link> */}
                            {
                                !displayName ? (
                                    <>
                                        <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                                        <Nav.Link as={NavLink} to="/signin">Sign In</Nav.Link>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                                        <NavDropdown
                                            title={
                                                <img
                                                    style={{ width: '40px', borderRadius: '50%' }}
                                                    src={user.photoURL}
                                                    alt="" />}
                                        >
                                            <div className="text-center mx-2">
                                                <h5 className="text-center m-2">{displayName}</h5>
                                                <h6>Account</h6>
                                                <h6>Appointed</h6>
                                                <h6>Visited</h6>
                                                <h6>Settings</h6>
                                                <button onClick={logOut} className="btn btn-primary mt-2">Sign Out</button>
                                            </div>
                                        </NavDropdown>
                                    </>
                                )}
                            <Nav.Link href="#link" className='custom-logo'>
                                <FontAwesomeIcon icon={faPhone} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;