import React from 'react'
import { Jumbotron, Navbar, Nav, Container, Col, Row, Image, TabContainer, TabContent, Tabs, Tab, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import img from "../img/RF2_8831.jpg"

export default function Landing() {
    return (
        <>
            <Container>
                <Jumbotron style={{backgroundColor:"transparent", height:"70vh"}}>
                    <Row className="mb-5 mt-5 pt-5">
                        <Col sm={12}>
                            <h1 className="mb-4">Hello, I'm Nathaniel!</h1>
                        </Col>
                        <Col sm={12}>
                            <p className="mb-6">
                                I'm a lifelong student, photographer, web developer, shrimp keeper, and guitarist!
                            </p>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center" >
                        <a className="pl-4 pr-4" href="https://github.com/nartexyu" >Github</a>
                        <a className="pl-4 pr-4" href="https://www.linkedin.com/in/nathaniel-yu/">LinkedIn</a>
                        <a className="pl-4 pr-4" href="https://www.instagram.com/nathanielxyu/">Instagram</a>
                    </Row>
                </Jumbotron>
            </Container>

            <h2 className="text-center" id="about">About Me</h2>
            <Container className="p-5">
                <Row>
                    <Col sm={4}>
                        <Image src={img} rounded style={{height:"400px", width:"300px"}}/>
                    </Col>
                    <Col sm={8}>
                        <TabContainer className="p-5">
                            <Tabs defaultActiveKey="bio" id="uncontrolled-tab-example">
                                <Tab eventKey="bio" title="Bio">
                                    <TabContent className="mt-4 p-3">
                                        <p>Hi, I'm Nathaniel! I just recently graduated from the University of Southern California with a degree in Business Administration and concentration in real estate finance.</p>
                                        <p>At USC, some of the took classes I took included Financial Analysis and Valuations, Real Estate Analysis, Corporate Finance. Outside of class, I was very active in the Chinese American Student Association as the Director of Finance.</p>
                                        <p>During the pandemic, I decided to enroll in the UCLA Extension Coding Bootcamp and now I'm striving to become a web</p>
                                    </TabContent>
                                </Tab>
                                <Tab eventKey="education" title="Education">
                                    <TabContent className="mt-4 p-3">
                                        <h5>UCLA Extension Coding Bootcamp (2020 - 2021)</h5>
                                        <p className="mb-4">- Full Stack Web Development</p>

                                        <h5>University of Southern California (2017 - 2020)</h5>
                                        <p className="mb-1">- B. S. of Business Administration</p>
                                        <p>- Concentration in Real Estate Finance</p>

                                        <h6>Languages/Frameworks/Tools</h6>
                                        <p className="mb-1">- Javascript</p>
                                        <p className="mb-1">- Python</p>
                                        <p className="mb-1">- MongoDB</p>
                                        <p className="mb-1">- MySQL</p>
                                        <p className="mb-1">- Express.js</p>
                                        <p className="mb-1">- React.js</p>
                                        <p className="mb-1">- Node.js</p>
                                    </TabContent>
                                </Tab>
                            </Tabs>
                        </TabContainer>
                    </Col>
                </Row>

            </Container>

            <h2 className="text-center" id="projects">Projects</h2>
            <Container className="p-5">
                <Row className="d-flex justify-content-center text-center mb-4">
                    <Card style={{ width: '18rem', marginRight: '3rem', marginLeft: '3rem'}}>
                        <Card.Body>
                            <Card.Title><a href="https://github.com/nartexyu/binary-babes">Musicology</a></Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginRight: '3rem' }}>
                        <Card.Body>
                            <Card.Title><a href="https://github.com/DJ620/store-front-react">Store Front</a></Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginRight: '3rem' }}>
                        <Card.Body>
                            <Card.Title><a href="https://github.com/TChristensenDrumz/HARMony">HARMony</a></Card.Title>
                        </Card.Body>
                    </Card>
                </Row>

                <Row className="d-flex justify-content-center text-center mb-4">
                    <Card style={{ width: '18rem', marginRight: '3rem', marginLeft: '3rem'}}>
                        <Card.Body>
                            <Card.Title><a href="https://github.com/nartexyu/Workout-Tracker">Workout Tracker</a></Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginRight: '3rem' }}>
                        <Card.Body>
                            <Card.Title><a href="https://github.com/nartexyu/Google-Books-Search">Google Books Search</a></Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', marginRight: '3rem' }}>
                        <Card.Body>
                            <Card.Title><a href="https://github.com/nartexyu/Team-Profile-Generator">Team Profile Generator</a></Card.Title>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}
