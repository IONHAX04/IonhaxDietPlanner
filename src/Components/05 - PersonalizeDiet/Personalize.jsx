import React from 'react'

import { Button, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Offcanvas, Col, Row } from 'react-bootstrap';

import '../05 - PersonalizeDiet/PersonalizeDiet.css'

import user from '../../assets/images/SideNav/man.png';

import DietPlan from '../../assets/images/Navbar/dietPlan.png';
import Target from '../../assets/images/Navbar/target.png';
import Progresss from '../../assets/images/Navbar/progress.png';
import Personalizee from '../../assets/images/Navbar/personalize.png';
import Integration from '../../assets/images/Navbar/integration.png';
import Shopping from '../../assets/images/Navbar/shopping.png';

import Fish from '../../assets/images/Planners/fish.png';
import Vegas from '../../assets/images/Planners/salad.png';
import Vegetarian from '../../assets/images/Planners/vegetarian.png';
import Paleo from '../../assets/images/Planners/paleo-diet.png';

import Swal from 'sweetalert2';


import Footer from '../12 - Footer/Footer.jsx';

export default function Personalize() {

    const handleSavePlans = () => {
        Swal.fire({
            icon: 'success',
            title: 'Plans Saved!',
            text: 'Your meal plans have been saved successfully.',
        });
    };
    return (
        <div>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Brand href="#">
                            <img
                                alt=""
                                src={Personalizee}
                                width="30"
                                height="30"
                                className="d-inline-block align-top mb-3"
                            />{' '}
                            Personalize Diet
                        </Navbar.Brand>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            className="bg-dark color-white offCanvas"
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='navbarBrand'>
                            User Name
                        </Offcanvas.Title> */}
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
                                    <Nav.Link href='/nutritionInfo'>
                                        <img
                                            alt=""
                                            src={DietPlan}
                                            width="25"
                                            height="25"
                                            className="d-inline-block align-top me-3"
                                        />{' '}
                                        Nutrition Info
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
                                    <Nav.Link href='/integration'>
                                        <img
                                            alt=""
                                            src={Integration}
                                            width="25"
                                            height="25"
                                            className="d-inline-block align-top me-3"
                                        />{' '}
                                        Integration With Fitness Tracking
                                    </Nav.Link>
                                    <Nav.Link href='/axios'>
                                        <img
                                            alt=""
                                            src={Shopping}
                                            width="25"
                                            height="25"
                                            className="d-inline-block align-top me-3"
                                        />{' '}
                                        Shopping
                                    </Nav.Link>
                                    <Button variant="danger" href='/' className='col-lg-11' >Logout</Button>{' '}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}


            <div className="personalizeMeals mt-5">
                <h3>Meal Plan Settings</h3>
                <Button variant="outline-warning">Dietary Needs</Button>{' '}

                <div className="preference">
                    <Row>
                        <Col lg={4} className='preferenceContents d-flex align-items-center'>
                            <img
                                alt=""
                                src={Fish}
                                width="60px"
                                height="60px"
                                className="d-inline-block align-top me-3"
                            />{' '}
                            Pescetarian
                        </Col>
                        <Col lg={4} className='preferenceContents d-flex align-items-center'>
                            <img
                                alt=""
                                src={Vegas}
                                width="60"
                                height="60"
                                className="d-inline-block align-top me-3"
                            />{' '}
                            Vegan
                        </Col>
                        <Col lg={4} className='preferenceContents d-flex align-items-center'>
                            <img
                                alt=""
                                src={Vegetarian}
                                width="60"
                                height="60"
                                className="d-inline-block align-top me-3"
                            />{' '}
                            Vegetarian
                        </Col>
                        <Col lg={4} className='preferenceContents d-flex align-items-center'>
                            <img
                                alt=""
                                src={Paleo}
                                width="60"
                                height="60"
                                className="d-inline-block align-top me-3"
                            />{' '}
                            Paleo
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="allergy">
                <h2>Allergy</h2>
                <Form className='formCheckBox mt-2 mb-5 col-lg-6'>
                    {['checkbox'].map((type) => (
                        <div key={`-${type}`} className="mb-2">
                            <Row>
                                <Col lg={3}>
                                    <Form.Check
                                        label="Beef"
                                        type={type}
                                        className='formss'
                                        id={`-${type}-1`}
                                    />
                                </Col>
                                <Col lg={3}>
                                    <Form.Check
                                        label="Diary"
                                        type={type}
                                        className='formss'
                                        id={`-${type}-2`}
                                    />
                                </Col>
                                <Col lg={3}>
                                    <Form.Check
                                        label="Egg"
                                        type={type}
                                        className='formss'
                                        id={`-${type}-2`}
                                    />
                                </Col>
                                <Col lg={3}>
                                    <Form.Check
                                        label="Fish"
                                        type={type}
                                        className='formss'
                                        id={`-${type}-2`}
                                    />

                                </Col>
                                <Col lg={3}>
                                    <Form.Check
                                        label="FODMAP"
                                        type={type}
                                        className='formss'
                                        id={`-${type}-2`}
                                    />
                                </Col>
                                <Col lg={3}>
                                    <Form.Check
                                        label="Gluten"
                                        type={type}
                                        className='formss'
                                        id={`-${type}-2`}
                                    />
                                </Col>
                                <Col lg={3}>
                                    <Form.Check
                                        label="Nuts"
                                        type={type}
                                        className='formss'
                                        id={`-${type}-2`}
                                    />
                                </Col>
                                <Col lg={3}>
                                    <Form.Check
                                        label="Shellfish"
                                        type={type}
                                        className='formss'
                                        id={`-${type}-2`}
                                    />
                                </Col>
                                <Col lg={3}>
                                    <Form.Check
                                        label="Soy"
                                        type={type}
                                        className='formss'
                                        id={`-${type}-2`}
                                    />
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Form>
            </div>


            <div className="nutritionalCriteria">
                <Button variant="outline-warning">Nutritional Criteria</Button>{' '}
                <div className="tabs mb-4 col-lg-6">
                    <h2>Calories</h2>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Range 1800-2000</InputGroup.Text>
                        <Form.Control aria-label="From" type='number' placeholder='From' />
                        <Form.Control aria-label="To" type='number' placeholder='To' />
                    </InputGroup>
                    <h5><span>Note :- </span> We advise at least a 100 kcal difference between min and max target. </h5>
                </div>

                <div className="tabs mb-4 col-lg-6">
                    <h2>Protein</h2>
                    <InputGroup className="mb-7">
                        <InputGroup.Text>Protein 0 - 100%</InputGroup.Text>
                        <Form.Control aria-label="From" type='number' placeholder='From' />
                        <Form.Control aria-label="To" type='number' placeholder='To' />
                    </InputGroup>
                    <h5><span>Note :- </span>  It is typically recommended to have a protein intake between 10-35% of total calories. </h5>
                </div>

                <div className="tabs mb-4 col-lg-6">
                    <h2>Carbs</h2>
                    <InputGroup className="mb-7">
                        <InputGroup.Text>Carbs 0 - 100%</InputGroup.Text>
                        <Form.Control aria-label="From" type='number' placeholder='From' />
                        <Form.Control aria-label="To" type='number' placeholder='To' />
                    </InputGroup>
                    <h5><span>Note :- </span> Having too low an intake of carbohydrates can negatively impact your performance when exercising. </h5>
                </div>

                <div className="tabs mb-4 col-lg-6">
                    <h2>Fat</h2>
                    <InputGroup className="mb-7">
                        <InputGroup.Text>Fat 0 - 100%</InputGroup.Text>
                        <Form.Control aria-label="From" type='number' placeholder='From' />
                        <Form.Control aria-label="To" type='number' placeholder='To' />
                    </InputGroup>
                    <h5><span>Note :- </span>It's typically recommended to have a fat intake between 20-35% of total calories. </h5>
                </div>
                <Button
                    variant="outline-success"
                    className="col-lg-6 mb-6"
                    onClick={handleSavePlans}
                >
                    Save Plans
                </Button>{' '}
            </div>

            <Footer />
        </div>
    )
}

