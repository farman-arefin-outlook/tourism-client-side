import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FooterBg from './../../assets/images/footer-bg.PNG';
import FooterLogo from './../../assets/images/footerLogo.png';
import PaymentGateWay from './../../assets/images/payment-gateway.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="text-white">
            <div className="py-4" style={{ background: `url(${FooterBg})` }}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="text-center my-2">
                                <img width='200px' src={FooterLogo} alt="" />
                            </div>
                            <ul className="list-unstyled">
                                <li><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon><span className="ms-2 fs-5">Noakhali,Chittagong,Bangladesh</span></li>
                                <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><span className="ms-2 fs-5">Official: farman.arefin@gmail.com</span></li>
                                <li><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon><span className="ms-2 fs-6">Helpline: 0183473783,01934737437(Available: 10:00 AM to 10.00PM</span></li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <ul className="list-unstyled footer-link">
                                <li>
                                    <NavLink to="/home">Home</NavLink>
                                </li>
                                <li><NavLink to="/contact">Contact Us</NavLink></li>
                                <li>
                                    <NavLink to="/policy">Policy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About Us</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <div className="text-center">
                                <img className="img-fluid" src={PaymentGateWay} alt="paymentGateway" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr className="m-0 p-0" />
            <p className="text-center m-0 py-3 footer-color">Copyright &copy; All Right Reserved by Farman Arefin Tamim Community in 2021.</p>
        </div >
    );
};

export default Footer;