import React from 'react'
import logo from '../../assets/images/diet.png'
import '../00 - Navbar/Navbar.css'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas,OverlayTrigger, Tooltip } from 'react-bootstrap';

import NavPlan from '../../assets/images/Navbar/plan.png';
import DietPlan from '../../assets/images/Navbar/dietPlan.png';
import Plan from '../../assets/images/Navbar/planDiet.png';
import Target from '../../assets/images/Navbar/target.png';
import Progress from '../../assets/images/Navbar/progress.png';
import Personalize from '../../assets/images/Navbar/personalize.png';
import Integration from '../../assets/images/Navbar/integration.png';
import Shopping from '../../assets/images/Navbar/shopping.png';
import Calculator from '../../assets/images/Navbar/calculator.png';
import Article from '../../assets/images/Navbar/article.png';
import Help from '../../assets/images/Navbar/food-delivery.png';
import Home from '../../assets/images/house.png';


const Navbars = () => {

    const loginPage = () => {
        window.location.href="/login";
    }

    const nutritionInfo = () => {
        window.location.href="/nutritionInfo";
    }

    const goals = () => {
        window.location.href="/goals";
    }

    const personalizzee = () => {
        window.location.href="/personalize";
    }

    const integrations = () => {
        window.location.href="/integration";
    }
    const mealPlanner = () => {
        window.location.href="./mealPlanner";
    }

    const calculator = () => {
        window.location.href="/calculator";
    }

    const articles = () => {
        window.location.href="./articles";
    }

    const community = () => {
        window.location.href="./community";
    }

    const progress = () => {
        window.location.href="./progress";
    }

    const shopping = () => {
        window.location.href="./axios";
    }

    const home = () => {
        window.location.href="./";
    }
    return (
        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            Diet Planner
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            className="bg-dark color-white"
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"

                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}  className='navbarBrand'>
                                    <a href='/reg'>User Info</a>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className=' bg-dark navbar-dark'>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href='/homePage'>
                                        <img
                                            alt=""
                                            src={Home}
                                            width="20"
                                            height="20"
                                            className="d-inline-block align-top"
                                        />{' '}
                                        Home</Nav.Link>
                                    <NavDropdown
                                        title="Diet Plans"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item onClick={nutritionInfo}>
                                            <img
                                                alt=""
                                                src={DietPlan}
                                                width="20"
                                                height="20"
                                                className="d-inline-block align-top"
                                            />{' '}
                                            Nutrition Info
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={goals}>
                                            <img
                                                alt=""
                                                src={Target}
                                                width="20"
                                                height="20"
                                                className="d-inline-block align-top"
                                            />{' '}
                                            Goals
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={progress}>
                                            <img
                                                alt=""
                                                src={Progress}
                                                width="20"
                                                height="20"
                                                className="d-inline-block align-top"
                                            />{' '}
                                            Progress Tracking
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={personalizzee}>
                                            <img
                                                alt=""
                                                src={Personalize}
                                                width="20"
                                                height="20"
                                                className="d-inline-block align-top"
                                            />{' '}
                                            Personalize Diet
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={integrations}>
                                            <img
                                                alt=""
                                                src={Integration}
                                                width="20"
                                                height="20"
                                                className="d-inline-block align-top"
                                            />{' '}
                                            Integration with Fitness
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={shopping}>
                                            <img
                                                alt=""
                                                src={Shopping}
                                                width="20"
                                                height="20"
                                                className="d-inline-block align-top"
                                            />{' '}
                                            Shopping
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link onClick={calculator}>
                                        <img
                                            alt=""
                                            src={Calculator}
                                            width="20"
                                            height="20"
                                            className="d-inline-block align-top"
                                        />{' '}
                                        Calculator</Nav.Link>
                                        
                                    <Nav.Link onClick={community}>
                                        <img
                                            alt=""
                                            src={Help}
                                            width="20"
                                            height="20"
                                            className="d-inline-block align-top"
                                        />{' '}
                                        Help</Nav.Link>
                                    <Button variant="success" onClick={loginPage}>Login</Button>{' '}
                                    {/* <Button variant="danger">Logout</Button>{' '} */}
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Navbars