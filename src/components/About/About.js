import React from 'react';
import { Accordion, Card, CardGroup, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faWalking, faUser } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <Container className="my-5">
            {/* our goals section */}
            <h1>Our Goals</h1>
            <CardGroup>
                <Card className="me-2">
                    <Card.Body className="bg-primary text-light">
                        <Card.Title> <FontAwesomeIcon icon={faCode} />Complete Programming Journey</Card.Title>
                        <Card.Text>
                            we will provide all necessary instruction and resources in our course.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="me-2">
                    <Card.Body className="bg-success text-light">
                        <Card.Title> <FontAwesomeIcon icon={faWalking} /> Beginnner Friendly</Card.Title>
                        <Card.Text>
                            Making a non-programmer to a complete programmer is our goal.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className="bg-warning text-light">
                        <Card.Title><FontAwesomeIcon icon={faUser} /> Unlimited Support</Card.Title>
                        <Card.Text>
                            Our instructor team will always be there for you if you need us.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

            {/* frequently asked questions section */}


            <div className="my-5">
                <h1>Frequently asked question</h1>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item className="fs-6 fw-bold" eventKey="0">
                        <Accordion.Header> <span className="fs-5 text-dark fw-bold">For whom is this course?</span> </Accordion.Header>
                        <Accordion.Body>
                            Anyone can enroll our course if you have interest in learning programming language.
                            Programming is a skill that comes with numerous benefits. Some of the advantages that come with knowing code are a guaranteed job, getting to create interesting applications, developing problem-solving skills, and sometimes even the opportunity to work from home.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="fs-6 fw-bold" eventKey="1">
                        <Accordion.Header><span className="fs-5 text-dark fw-bold">What do i need in order to start the course?</span></Accordion.Header>
                        <Accordion.Body>
                            First of all it takes dedicated time. Must 7-8 hours daily. If possible, 8-10 hours (if you can't afford it. If you don't want to work hard, enrolling in the course will be of no use) Secondly, a laptop or a computer and thirdly a minimum  Internet of 2-10 Mbps. It is better to have broadband so that the video of the course can be seen well. If you want to be a professional programmer, you have to do months of serious hard work.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="fs-6 fw-bold" eventKey="2">
                        <Accordion.Header><span className="fs-5 text-dark fw-bold">Do everyone gets a job after finishing the course?</span></Accordion.Header>
                        <Accordion.Body>
                            No. Not everyone gets a job. However those who finish the main course. And by finishing right, 80% of them get jobs or interns.However, those who can not finish the course on time. We also have support for them. Some of them get jobs or interns from time to time.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="fs-6 fw-bold" eventKey="3">
                        <Accordion.Header> <span className="fs-5 text-dark fw-bold">In order to learn programming what kind of experience do i need to have?</span></Accordion.Header>
                        <Accordion.Body>
                            While we don't require coding experience, we highly recommend that you've exposed yourself to some coding tutorials. We really want students who know what coding is actually like and are certain they want to embark on a career as a software developer
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </Container>
    );
};

export default About;