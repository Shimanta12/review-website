import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <Container>
            <div className="my-5">
                <h2>Our Services</h2>
                <Row xs={1} md={2} className="g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Services;