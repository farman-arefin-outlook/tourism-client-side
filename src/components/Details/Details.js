import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Details = () => {

    const [service, setService] = useState({});


    const { id } = useParams();

    const { admit } = useAuth();
    // const service = services.find((service) => service.key === Number(id));
    // const selected = matchingService?.title;
    //const { img, title, description } = matchingService;

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data?._id) {
                    setService(data);
                } else {
                    alert("Something went wrong!");
                }
            })

    }, []);

    return (
        <div>
            {
                service?.title ? (
                    <Container>
                        <Row className="mb-5">
                            <Col md={6}>
                                <img width="100%" height="60%" className="img-fluid" src={service.img} alt="" />
                            </Col>
                            <Col md={6} className=" justify-content-center">
                                <Row>
                                    <h1>{service.title}</h1>
                                    <p>{service.description}</p>
                                </Row>
                                <Button
                                    onClick={() => admit(service)}
                                    variant="primary"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add To Cart</Button>
                            </Col>
                        </Row>
                    </Container>
                ) : (<h1 className="text-center my-5 p-5">No Service Found</h1>)
            }

        </div>
    );
};

export default Details;