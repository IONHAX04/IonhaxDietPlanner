import React from 'react'
import '../06 - IntegrationFitness/Integration.css'

import { Button, Card, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Offcanvas, Col, Row } from 'react-bootstrap';

import user from '../../assets/images/SideNav/man.png';

import Swal from 'sweetalert2';

import DietPlan from '../../assets/images/Navbar/dietPlan.png';
import Target from '../../assets/images/Navbar/target.png';
import Progresss from '../../assets/images/Navbar/progress.png';
import Personalizee from '../../assets/images/Navbar/personalize.png';
import Integrations from '../../assets/images/Navbar/integration.png';
import Shopping from '../../assets/images/Navbar/shopping.png';

import IntroImg from '../../assets/images/Integration/introImg.jpg';
import SecondImg from '../../assets/images/Integration/introImg2.jpg';
import Run from '../../assets/images/Integration/run.png';
import Step from '../../assets/images/Integration/step.png';
import Workout from '../../assets/images/Integration/workout.png';

import Footer from '../12 - Footer/Footer.jsx';


export default function Integration() {

    const jogging = () => {
        Swal.fire({
            title: 'Running App - GPS',
            text: 'Click the button below to download the app.',
            showCancelButton: true,
            confirmButtonText: 'Download App',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'https://play.google.com/store/apps/details?id=running.tracker.gps.map';
            }
        });
    };

    const steps = () => {
        Swal.fire({
            title: 'Google Fit : Activity Tracking',
            text: 'Click the button below to download the app.',
            showCancelButton: true,
            confirmButtonText: 'Download App',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.google.android.apps.fitness';
            }
        });
    }

    const workout = () => {
        Swal.fire({
            title: 'Home Workout - No Equipments',
            text: 'Click the button below to download the app.',
            showCancelButton: true,
            confirmButtonText: 'Download App',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'https://play.google.com/store/apps/details?id=homeworkout.homeworkouts.noequipment';
            }
        });
    }
    return (
        <div>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Brand href="#">
                            <img
                                alt=""
                                src={Integrations}
                                width="30"
                                height="30"
                                className="d-inline-block align-top mb-3"
                            />{' '}
                            Integration With Fitness Tracking
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


            <div className="integrationContents mt-5">
                <div className="row">
                    <div className="col-lg-5">
                        <h2>Track Your Progress With Ease...</h2>
                        <p>Our platform is all about giving you a complete picture of your health and fitness journey. We've made it simple for you to connect your favorite fitness trackers and health apps to get a better understanding of your well-being.</p>
                        <p> What does this mean for you? It means you can easily share data from your wearable devices, like the number of steps you've taken, the calories you've burned, and your exercise routines. By doing this, we can provide you with a much more accurate assessment of your overall energy balance.</p>

                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <img src={IntroImg} className='magesPersonalize'></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block">
                        <img src={SecondImg} className='magesPersonalize'></img>
                    </div>
                    <div className="col-lg-5">
                        <h2>Here's why you'll love our Fitness Tracker Integration:</h2>
                        <ul>
                            <li>Stay Informed: Your fitness data is always up-to-date as it syncs seamlessly from your wearable devices.</li>
                            <li>Better Insights: We combine information from various sources to offer you a holistic view of your health and fitness, providing you with more accurate insights.</li>
                            <li>Goal Achievement: Easily set and monitor your fitness goals, making it simpler to reach your objectives.</li>
                            <li>Hassle-Free: Our setup is user-friendly and requires minimal effort on your part.</li>
                        </ul>
                    </div>
                </div>



                <div className="partners">


                    <h3> We're proud to partner with a variety of popular applications that cater to your specific fitness interests:</h3>

                    <div className="row">
                        <Card style={{ width: '18rem', alignItems: 'center', margin: '10px' }}>
                            <Card.Img variant="top" src={Run} style={{ width: '140px', height: '140px' }} />
                            <Card.Body>
                                <Card.Title><strong>Jogging Enthusiasts</strong></Card.Title>
                                <Card.Text className='text'>
                                    Connect with our partner jogging apps to log your daily runs and track your progress over time.
                                </Card.Text>
                                <Button variant="outline-primary" onClick={jogging}>About Me</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', alignItems: 'center', margin: '10px' }}>
                            <Card.Img variant="top" src={Step} style={{ width: '140px', height: '140px' }} />
                            <Card.Body>
                                <Card.Title><strong>Step Counters</strong></Card.Title>
                                <Card.Text className='text'>
                                    Sync your step count data from step tracking apps to monitor your daily activity levels.
                                </Card.Text>
                                <Button variant="outline-primary" onClick={steps}>About Me</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', alignItems: 'center', margin: '10px' }}>
                            <Card.Img variant="top" src={Workout} style={{ width: '140px', height: '140px' }} />
                            <Card.Body>
                                <Card.Title><strong>Workout Fanatics</strong></Card.Title>
                                <Card.Text className='text'>
                                    We partner with health apps for vital metrics, enhancing your comprehensive health assessment.
                                </Card.Text>
                                <Button variant="outline-primary" onClick={workout}>About Me</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
