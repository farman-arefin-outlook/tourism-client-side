import React from "react";
import bgImage from "./../../assets/images/banner.jpg";
//import Bg from "./../../assets/images/bg.png";
import { Container } from "react-bootstrap";

import Bounce from "react-reveal/Bounce";

import { NavLink } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import Service from "../Service/Service";
import Slide from "react-reveal/Zoom";


import sectionBg from "./../../assets/images/sectionBg.PNG";

const Home = () => {
    //const { services } = useAuth();
    return (
        <div>
            <div
                style={{
                    background: `url(${bgImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }}
            >
                <Container>
                    <div
                        style={{ height: "90vh" }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <div className="text-center my-5 py-5">
                            <Bounce left cascade>
                                <h5 className="text-dark text-white text-bold">DISCOVER THE NATURE NEW TRAVEL</h5>
                            </Bounce>

                            <Bounce right cascade>
                                <h1 className="text-center text-white fs-1 font-size-lg">Enjoy the best moments of life.</h1>
                            </Bounce>

                            <Bounce>
                                <NavLink
                                    to='/about' className="rounded-pill fs-5  py-2  px-4 btn btn-primary">Discover More</NavLink>
                            </Bounce>
                        </div>
                    </div>
                </Container>
                {/* This is section */}
                <div className="py-5" style={{ background: `url(${sectionBg})` }}>
                    <div className="text-center text-white">
                        <Slide left>
                            <h1 className="text-center text-dark">Featured Services</h1>
                        </Slide>
                        <Slide right>
                            <p className="mb-0 text-center  text-white mt-2">Here you will get worldclass medical services and you can explore quality services.</p>
                        </Slide>
                    </div>
                    {/* <Container>
                        <div className="my-3 d-flex flex-wrap justify-content-between">
                            {
                                services.slice(0, 6)?.map((service) => (<Service service={service} key={service.key}></Service>))
                            }
                        </div>
                    </Container> */}
                </div>

            </div>
        </div>
    );
};

export default Home;