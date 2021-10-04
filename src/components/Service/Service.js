import React from 'react';
import { Card as div, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, price, courseLength, img, desc } = props.service;
    return (
        <Col className="shadow-sm rouded-3">
            <div className="d-flex align-items-center">
                <div className="w-75">
                    <div.Img width="200px" variant="top" src={img} />
                </div>
                <div className="p-3">
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <h5>Course Duration: {courseLength}</h5>
                    <h5>Price: ${price}</h5>
                    <Link to="/signup">
                        <button className="btn btn-primary">Enroll <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;