import { faEnvelope, faLock, faUser, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, FormControl, InputGroup, NavLink, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

import google from './../../assets/images/google-logo.png';
import facebook from './../../assets/images/facebook-logo.png';
import github from './../../assets/images/github-logo.png';

const SignUp = () => {
    const { AllContexts } = useAuth();
    const { signInWithGoogle, signInWithGithub, signInWithFacebook, error, getEmail, getPassword, signUp, getName, getPhoto } = AllContexts;
    return (
        <div>
            <div className="text-center my-4">
                <h2>Please Sign Up</h2>
                <p className=" mt-2">Sign Up with Email & Password</p>
                <p className="text-danger text-center">{error}</p>
                <div className="w-25 mx-auto">
                    <Form onSubmit={signUp}>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="name" visuallyHidden>
                                    Your Name
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl
                                        required
                                        onBlur={getName}
                                        type="text"
                                        autoComplete="current-name"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="email" visuallyHidden>
                                    Your Email Address
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl
                                        required
                                        onBlur={getEmail}
                                        type="email"
                                        autoComplete="current-email"
                                        id="email"
                                        placeholder="Enter your email address"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="text-start">
                                <Form.Label htmlFor="password" visuallyHidden>
                                    Your Password
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl
                                        required
                                        onBlur={getPassword}
                                        type="password"
                                        autoComplete="current-password"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="name" visuallyHidden>
                                    Your Profile Photo URL
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl
                                        required
                                        onBlur={getPhoto}
                                        type="text"
                                        autoComplete="current-text"
                                        id="photo"
                                        placeholder="Enter valid photo url"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <button type="submit" className="btn btn-primary mt-2 w-100">
                            Sign Up
                        </button>
                    </Form>
                </div>
                <p className="mt-2">
                    <NavLink className="text-decoration-none" to="/login">
                        Already have an account? Please Sign In
                    </NavLink>
                </p>
                <p className="mt-3">Or</p>
                <p> Sign-In with</p>
                <div>
                    <button onClick={signInWithGoogle} className="btn">
                        <img src={google} width="46px" alt="google-icon" />
                    </button>
                    <button onClick={signInWithFacebook} className="btn">
                        <img src={facebook} width="45px" alt="facebook-icon" />
                    </button>
                    <button onClick={signInWithGithub} className="btn">
                        <img src={github} width="46px" alt="github-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;