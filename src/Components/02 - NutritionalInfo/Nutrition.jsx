import React from 'react'
import '../02 - NutritionalInfo/Nutrition.css';

import { Button, Card, Container, Form, InputGroup, Modal, Nav, Navbar, NavDropdown, Offcanvas, Tab, Tabs, Table, Col, Row } from 'react-bootstrap';

import Tables from '../02 - NutritionalInfo/Tables.jsx'
import user from '../../assets/images/SideNav/man.png';

import DietPlan from '../../assets/images/Navbar/dietPlan.png';
import Target from '../../assets/images/Navbar/target.png';
import Progresss from '../../assets/images/Navbar/progress.png';
import Personalizee from '../../assets/images/Navbar/personalize.png';
import Integrations from '../../assets/images/Navbar/integration.png';
import Shopping from '../../assets/images/Navbar/shopping.png';




import High from '../../assets/images/NutritionInfo/meat.gif';
import Moderate from '../../assets/images/NutritionInfo/mushroom-shower.gif';
import Low from '../../assets/images/NutritionInfo/watermelon.gif';


import Footer from '../../Components/12 - Footer/Footer.jsx';
import Cards from './Cards';




export default function Nutrition() {
    const [modalShow, setModalShow] = React.useState(false);


    return (
        <div>

            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Brand href="#">
                            <img
                                alt=""
                                src={DietPlan}
                                width="30"
                                height="30"
                                className="d-inline-block align-top mb-3"
                            />{' '}
                            Nutrition Info

                        </Navbar.Brand>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            className="bg-dark color-white offCanvas"
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                            </Offcanvas.Header>
                            <Offcanvas.Body className=' bg-dark navbar-dark'>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <div className="image">

                                        <img
                                            alt=""
                                            src={user}
                                            width="150"
                                            height="150"
                                            className="d-inline-block align-top mb-3"
                                        />{' '}
                                    </div>
                                    <Nav.Link href='/integration'>
                                        <img
                                            alt=""
                                            src={Integrations}
                                            width="25"
                                            height="25"
                                            className="d-inline-block align-top me-3"
                                        />{' '}
                                        Integration With Fitness Tracking
                                    </Nav.Link>
                                    <Nav.Link href="/goals">
                                        <img
                                            alt=""
                                            src={Target}
                                            width="25"
                                            height="25"
                                            className="d-inline-block align-top me-3"
                                        />{' '}
                                        Goals
                                    </Nav.Link>
                                    <Nav.Link href='/progress'>
                                        <img
                                            alt=""
                                            src={Progresss}
                                            width="25"
                                            height="25"
                                            className="d-inline-block align-top me-3"
                                        />{' '}
                                        Progress Tracking
                                    </Nav.Link>
                                    <Nav.Link href='personalize'>
                                        <img
                                            alt=""
                                            src={Personalizee}
                                            width="25"
                                            height="25"
                                            className="d-inline-block align-top me-3"
                                        />{' '}
                                        Personalize Diet
                                    </Nav.Link>
                                    <Nav.Link href='/axios'>
                                        <img
                                            alt=""
                                            src={Shopping}
                                            width="25"
                                            height="25"
                                            className="d-inline-block align-top me-3"
                                        />{' '}
                                        Shopping List
                                    </Nav.Link>
                                    <Button variant="danger" href='/' className='col-lg-11' >Logout</Button>{' '}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

            <div className="nutritionContents mt-5 mb-5">
                <h3>Unlock a Healthier You with Detailed Nutrition Information</h3>
                <h6>Welcome to our web application, where we empower you to take control of your health through informed choices. We believe that knowledge is the key to a healthier lifestyle, and that's why we provide you with comprehensive nutritional information for every meal and recipe you encounter.</h6>

                <h4>What can you expect from our platform?</h4>

                <Cards />

                <Tables />

                <h4 className='mt-5'>We understand that making healthy choices can be a challenge. That's why we've categorized foods into three main groups based on protein content to help you make the right choices:</h4>
                <Row className='cardsMain'>
                    <Col lg={3} className='cardsCol'>
                        <Card style={{ width: '18rem' }} className='cardsNutrition'>
                            <Card.Img variant="top" src={High} style={{ width: '100px', height: '100px' }} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '20px', fontWeight: 'bolder' }}>Foods High in Protein</Card.Title>
                                <Card.Text style={{ fontSize: '19px' }}>
                                    These foods are packed with protein, making them excellent choices for those looking to build muscle or maintain a high-protein diet. They include chicken, beef, bacon, hamburger, and fried shrimp, among others.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className='cardsCol'>
                        <Card style={{ width: '18rem' }} className='cardsNutrition'>
                            <Card.Img variant="top" src={Moderate} style={{ width: '100px', height: '100px' }} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '20px', fontWeight: 'bolder' }}>Foods Moderate in Protein</Card.Title>
                                <Card.Text style={{ fontSize: '19px' }}>
                                    These foods offer a moderate protein content and are versatile additions to a balanced diet. In this category, you'll discover options such as cheese, bread, rice, pasta, and a wide variety of other choices.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className='cardsCol'>
                        <Card style={{ width: '18rem' }} className='cardsNutrition'>
                            <Card.Img variant="top" src={Low} style={{ width: '100px', height: '100px' }} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '20px', fontWeight: 'bolder' }}>Foods Low in Protein</Card.Title>
                                <Card.Text style={{ fontSize: '19px' }}>
                                    If you're watching your protein intake or looking for lighter options, these foods are low in protein. They include fruits like grapes, melon, and strawberries, vegetables like cucumbers and tomatoes, snacks.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



            </div>
            <Footer />
        </div>
    )
}
