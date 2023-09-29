import React from 'react'
import './Axios.css';

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import Footer from '../12 - Footer/Footer.jsx'
import { Button, Card, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Offcanvas, Col, Row } from 'react-bootstrap';

import user from '../../assets/images/SideNav/man.png';


import DietPlan from '../../assets/images/Navbar/dietPlan.png';
import Target from '../../assets/images/Navbar/target.png';
import Progresss from '../../assets/images/Navbar/progress.png';
import Personalizee from '../../assets/images/Navbar/personalize.png';
import Integrations from '../../assets/images/Navbar/integration.png';
import Shopping from '../../assets/images/Navbar/shopping.png';

import { deleteUser } from './UserReducer';

export default function Home() {

    const users = useSelector((state) => state.users);
    console.log(users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))
    }


    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Brand href="#">
                            <img
                                alt=""
                                src={Shopping}
                                width="30"
                                height="30"
                                className="d-inline-block align-top mb-3"
                            />{' '}
                            Shopping List
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
                                    <Nav.Link href='/integration'>
                                        <img
                                            alt=""
                                            src={Integrations}
                                            width="25"
                                            height="25"
                                            className="d-inline-block align-top me-3"
                                        />{' '}
                                        Integration with Fitness 
                                    </Nav.Link>
                                    <Button variant="danger" href='/' className='col-lg-11' >Logout</Button>{' '}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            <div className="contents">

            <div className='dietPlanner'>
                <div className="container col-lg-8">
                    <h2>Shopping List For You!!!</h2>
                    <Link to='/createAxios' className='btn btn-success my-3'>Add Your Item +</Link>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Check Out !</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.itemname}</td>
                                    <td>
                                        <Link to={`/editAxios/${user.id}`} className='btn btn-sm btn-primary'><i class="bi bi-pencil-square"></i></Link>
                                        <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms'><i class="bi bi-trash-fill"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
            </div>
        </>
    )
}
