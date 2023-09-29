import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Card, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Offcanvas, Tab, Tabs, Table, Col, Row } from 'react-bootstrap';

import user from '../../assets/images/SideNav/man.png';

import DietPlan from '../../assets/images/Navbar/dietPlan.png';
import Target from '../../assets/images/Navbar/target.png';
import Progresss from '../../assets/images/Navbar/progress.png';
import Personalizee from '../../assets/images/Navbar/personalize.png';
import Integrations from '../../assets/images/Navbar/integration.png';
import Shopping from '../../assets/images/Navbar/shopping.png';


import './Goals.css';
import WeightLoss from './WeightLoss/WeightLoss.jsx';
import WeightGain from './WeightGain/WeightGain.jsx';
import { useAuth } from '../../AuthProvider';

export default function Goals() {
    const navigate = useNavigate();

    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);



    const [activeTab, setActiveTab] = useState('first');

    const handleTabClick = (tabKey) => {
        setActiveTab(tabKey);
    };


    return (
        <div>
            {isLoggedIn ? (
                <div>
                    {[false].map((expand) => (
                        <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
                            <Container fluid>
                                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                <Navbar.Brand href="#">
                                    <img
                                        alt=""
                                        src={Target}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top mb-3"
                                    />{' '}
                                    Goals

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
                                            <Nav.Link href="/nutritionInfo">
                                                <img
                                                    alt=""
                                                    src={DietPlan}
                                                    width="25"
                                                    height="25"
                                                    className="d-inline-block align-top me-3"
                                                />{' '}
                                                Nutrition Info
                                            </Nav.Link>
                                            <Nav.Link href='progress'>
                                                <img
                                                    alt=""
                                                    src={Progresss}
                                                    width="25"
                                                    height="25"
                                                    className="d-inline-block align-top me-3"
                                                />{' '}
                                                Progress Tracking
                                            </Nav.Link>
                                            <Nav.Link href='/personalize'>
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
                                                Shopping
                                            </Nav.Link>
                                            <Button variant="danger" href='/' className='col-lg-11' >Logout</Button>{' '}
                                        </Nav>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                        </Navbar>
                    ))}


                    <div className="goalsContents">
                        <Button
                            variant={activeTab === 'first' ? 'warning' : 'outline-warning'}
                            onClick={() => handleTabClick('first')}
                        >
                            Weight Loss Diet
                        </Button>
                        <Button
                            variant={activeTab === 'second' ? 'success' : 'outline-success'}
                            onClick={() => handleTabClick('second')}
                        >
                            Weight Gain Diet
                        </Button>

                        <div className="mt-3">
                            {activeTab === 'first' && <div><WeightLoss /></div>}
                            {activeTab === 'second' && <div><WeightGain /> </div>}
                        </div>
                    </div>
                </div>
            ) : (window.location.replace('/login'))}


        </div>
    )
}
