import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import useServices from '../../hooks/useServices';
import img from '../../images/banner-image.jpg';
import Service from '../Service/Service';
import img1 from '../../images/caro-java.jpg'
import img2 from '../../images/caro-javascript.jpg'
import img3 from '../../images/caro-python.jpg'

const Home = () => {
    const [services] = useServices();
    return (
        <Container >
            <div className="row">
                <div className="col-md-5 d-flex align-items-center">
                    <div className="">
                        <h1 className="fs-1">Learn programming</h1>
                        <p className="fs-5">Join the millions learning to code with <span className="text-primary">iCode</span> <br /> Sign up to enroll our courses</p>
                        <Link to="/signup">
                            <button className="btn btn-outline-primary fw-bold">Sign Up <FontAwesomeIcon icon={faSignInAlt} /></button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-7">
                    <img className="img-fluid" src={img} alt="" />
                </div>
            </div>

            {/* popular courses */}
            <div className="my-5">
                <h1 className="mb-3">Popular Courses</h1>
                <Carousel variant="dark w-75 mx-auto rounded-3">
                    <Carousel.Item>
                        <img
                            height="300px"
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="300px"
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            height="300px"
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>


            {/* our services */}
            <div className="my-5">
                <h2>Our Services</h2>
                <Row xs={1} md={2} className="g-4 mb-5">
                    {
                        services.slice(0, 4).map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
                <Link to="/services">
                    <button className="btn btn-outline-primary">Go to Services <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </Link>
            </div>
        </Container>
    );
};

export default Home;