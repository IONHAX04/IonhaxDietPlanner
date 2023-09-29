import React from 'react'

import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

import '../04 - ProgressTracking/Progress.css';


import user from '../../assets/images/SideNav/man.png';

import NavPlan from '../../assets/images/Navbar/plan.png';
import DietPlan from '../../assets/images/Navbar/dietPlan.png';
import Plan from '../../assets/images/Navbar/planDiet.png';
import Target from '../../assets/images/Navbar/target.png';
import Progresss from '../../assets/images/Navbar/progress.png';
import Personalize from '../../assets/images/Navbar/personalize.png';
import Integration from '../../assets/images/Navbar/integration.png';
import Shopping from '../../assets/images/Navbar/shopping.png';
import Calculator from '../../assets/images/Navbar/calculator.png';
import Article from '../../assets/images/Navbar/article.png';
import Help from '../../assets/images/Navbar/food-delivery.png';

import Img1 from '../../assets/images/Progress/sideImg1.png';
import Img2 from '../../assets/images/Progress/graphs.png';
import Img3 from '../../assets/images/Progress/img3.png';

import ProgressTrack from '../../assets/images/Progress/tracking.png'
import Why from '../../assets/images/Progress/profit.png'
import Weight from '../../assets/images/Progress/weight.png'

import Footer from '../12 - Footer/Footer.jsx';

export default function Progress() {

    const calcc = () => {
        window.location.href = "/calculator";
    }


    return (
        <div>

            <div className="progressContents">

                {[false].map((expand) => (
                    <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
                        <Container fluid>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Brand href="#">
                                <img
                                    alt=""
                                    src={Progresss}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top mb-3"
                                />{' '}
                                My Progress
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
                                        <Nav.Link href='/personalize'>
                                            <img
                                                alt=""
                                                src={Personalize}
                                                width="25"
                                                height="25"
                                                className="d-inline-block align-top me-3"
                                            />{' '}
                                            Personalize Diet
                                        </Nav.Link>
                                        <Nav.Link href='/integration'>
                                            <img
                                                alt=""
                                                src={Integration}
                                                width="25"
                                                height="25"
                                                className="d-inline-block align-top me-3"
                                            />{' '}
                                            Integration With Friends
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


                <div className="contents col-lg-9">
                    <div className="row content1">
                        <div className="col-lg-7">
                            <h2>Progress Tracking!!!</h2>

                            <h3>Your Journey to Success starts here!</h3>
                            <h5>About our progress tracking system...</h5>
                            <p>At Diet Planner, we believe that tracking your progress is the key to achieving your health and fitness goals. Whether you're on a weight loss journey, building muscle, or simply striving for a healthier lifestyle, monitoring your progress provides valuable insights and motivation.</p>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <img height='360px' width='auto' src={ProgressTrack}></img>
                        </div>

                    </div>
                    <Button variant="outline-success" className='m-5'>Get Start Your Journey !!</Button>{' '}


                    <div className="row content1">
                        <div className="col-lg-3">
                            <img className='col-lg-12 d-none d-lg-block' height='300px' width='auto' src={Why}></img>
                        </div>
                        <div className="col-lg-9">
                            <h3>Why Track your progress???</h3>
                            <p><span>Data-Driven Decisions: </span>Make informed decisions about your diet, exercise routine, and lifestyle by having access to accurate and up-to-date data.</p>
                            <p><span>Motivation: </span>Seeing your progress over time can be incredibly motivating. Celebrate your achievements and stay focused on your goals.</p>
                            <p><span>Adjustment: </span>Identify areas where you need to make changes or improvements based on your tracked data.</p>

                        </div>
                    </div>


                    <div className="row content1">
                        <div className="col-lg-9">
                            <h3>What can you track?</h3>
                            <p>Our Progress Tracking system allows you to monitor a wide range of metrics, including:</p>
                            <p><span>Weight: </span>Keep an eye on your weight fluctuations to gauge the effectiveness of your diet and exercise program.</p>
                            <p><span>Body Measurements: </span>Track changes in specific body measurements like chest, arms, waist, and hips to see how your physique is evolving</p>
                            <p><span>Sleep, Stress, Hunger, and Fatigue: </span>Rate your sleep quality, stress levels, hunger, and fatigue on a scale to understand how they impact your progress.</p>
                        </div>
                        <div className="col-lg-3">
                            <img src={Weight} className='d-none d-lg-block' height='350px' width='300px'></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
