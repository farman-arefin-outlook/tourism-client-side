import React from 'react';
import { Col, Form, FormControl, InputGroup, NavLink, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

import google from './../../assets/images/google-logo.png';
import facebook from './../../assets/images/facebook-logo.png';
import github from './../../assets/images/github-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useLocation } from 'react-router';

const SignIn = () => {
    const { AllContexts } = useAuth();
    const { signInWithGoogle, signInWithGithub, signInWithFacebook, signInWithEmailandPass, error, getEmail, getPassword, setUser, setError } = AllContexts;

    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || '/home';


    const googleHandler = () => {
        signInWithGoogle()
            .then((result) => {
                setUser(result.user);
                history.push(redirect);
            }).catch(error => {
                setError(error.message);
            });
    }


    // const location = useLocation();
    // const history = useHistory();
    // const redirect = location.state?.from || "/courses";
    return (
        <div className="text-center my-4">
            <h2>Please Login</h2>
            <p className=" mt-2">Login with Email & Password</p>
            <p className="text-danger text-center">{error}</p>
            <div className="w-25 mx-auto">
                <Form onSubmit={signInWithEmailandPass}>
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
                                    onBlur={getPassword}
                                    type="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <button type="submit" className="btn btn-primary mt-2 w-100">
                        Login
                    </button>
                </Form>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/signup">
                    Need an Account? Please Sign up!
                </NavLink>
                <br />
                <NavLink className="text-decoration-none" to="/reset">
                    Forget Password?
                </NavLink>
            </p>
            <p className="mt-3">Or</p>
            <p> Login with</p>
            <div>
                <button onClick={googleHandler} className="btn">
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
    );
};

export default SignIn;