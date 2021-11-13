import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const { key } = useParams();

    const { services, admit } = useAuth();
    const matchingService = services.find((service) => service.key === Number(key));
    // const selected = matchingService?.title;
    //const { img, title, description } = matchingService;

    return (
        <div>
            {
                matchingService?.title ? (
                    <Container>
                        <Row className="mb-5">
                            <Col md={6}>
                                <img width="100%" height="60%" className="img-fluid" src={matchingService.img} alt="" />
                            </Col>
                            <Col md={6} className=" justify-content-center">
                                <Row>
                                    <h1>{matchingService.title}</h1>
                                    <p>{matchingService.description}</p>
                                </Row>
                                <Button
                                    onClick={() => admit(matchingService)}
                                    variant="primary"><FontAwesomeIcon icon={faBriefcaseMedical}></FontAwesomeIcon> Admit</Button>
                            </Col>
                        </Row>
                    </Container>
                ) : (<h1 className="text-center my-5 p-5">No Service Found</h1>)
            }

        </div>
    );
};

export default Details;