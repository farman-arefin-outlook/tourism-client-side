import React from 'react';
import useAuth from '../../hooks/useAuth';
import Slide from 'react-reveal/Slide';

import sectionBg from './../../assets/images/sectionBg-2.PNG';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import { useState } from "react";
const Services = () => {
    const { services, totalService } = useAuth();
    const [currentPage, setCurrentPage] = useState(0);
    function pageHandler(number) {
        setCurrentPage(number);
    }
    console.log(currentPage);
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
                        services.map((service) => (<Service service={service} key={service._id}></Service>))
                    }
                </div>
                <div className='d-flex justify-content-center'>
                    {
                        [...Array(totalService).keys()].map((number) => (
                            <button
                                onClick={() => pageHandler(number)}
                                key={number}>{number}</button>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;