import React from 'react';
import useAuth from '../../hooks/useAuth';
import Slide from 'react-reveal/Slide';

import sectionBg from './../../assets/images/sectionBg-2.PNG';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
const Appoinment = () => {
    const { services } = useAuth();
    return (
        <div className="py-5" style={{ background: `url(${sectionBg})` }}>
            <div className="text-center text-white">
                <Slide left>
                    <h1>Medical Services</h1>
                </Slide>
                <Slide right>
                    <p className="mb-0">Here you wil worldclass medical services and you can explore quality services.</p>
                </Slide>
            </div>
            <Container>
                <div className="my-3 d-flex flex-wrap justify-content-between">
                    {
                        services.map((service) => (<Service service={service} key={service.key}></Service>))
                    }
                </div>
            </Container>
        </div>
    );
};

export default Appoinment;