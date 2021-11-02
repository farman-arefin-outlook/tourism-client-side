import { faBriefcaseMedical, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Badge, Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/logo.png';
const Header = () => {
    return (
        <div>
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
                                <Nav.Link as={NavLink} to="/home">Destination</Nav.Link>
                                <Nav.Link as={NavLink} to="/services">Services</Nav.Link>

                                <NavDropdown title="Pages" id="basic-nav-dropdown">
                                    {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
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
                                    {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                                </NavDropdown>
                                <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                                {/* <Nav.Link as={NavLink} to="/admit" className='custom-logo'>
                                    <FontAwesomeIcon icon={faBriefcaseMedical} />
                                    <Badge className='badge'>0</Badge>
                                </Nav.Link> */}
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-primary">Search</Button>
                                </Form>
                                {
                                    !true ? (
                                        <>
                                            <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                                            <Nav.Link as={NavLink} to="/signin">Sign In</Nav.Link>
                                        </>
                                    ) : (
                                        <NavDropdown
                                            title={
                                                <img
                                                    style={{ width: '40px', borderRadius: '50%' }}
                                                    src=''
                                                    alt="" />}
                                        >
                                            <div className="text-center mx-2">
                                                <h5 className="text-center m-2">Tamim</h5>
                                                <h6>Account</h6>
                                                <h6>Appointed</h6>
                                                <h6>Visited</h6>
                                                <h6>Settings</h6>
                                                <button className="btn btn-primary mt-2">Sign Out</button>
                                            </div>
                                        </NavDropdown>
                                    )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;