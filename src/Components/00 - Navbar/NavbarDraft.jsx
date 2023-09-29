import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarDraft() {
    return (
        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavbarDraft;



// const Navbars = () => {
//     return (
//         <>
//             <Navbar bg="dark" variant="dark" expand="lg">
//                 <div className="container">
//                     <Navbar.Toggle aria-controls="navbarSupportedContent" />
//                     <Navbar.Brand href="#">
//                         React Bootstrap
//                         <img
//                             alt=""
//                             src={logo}
//                             width="30"
//                             height="30"
//                             className="d-inline-block align-top"
//                         />{' '}
//                     </Navbar.Brand>
//                     <Navbar.Collapse id="navbarSupportedContent">
//                         <Nav className="ms-auto">
//                             <Nav.Item className="ms-3">
//                                 <Nav.Link href="#" className="active">Meal Planner</Nav.Link>
//                             </Nav.Item>
//                             <NavDropdown title="Diet Plans" className="ms-3">
//                                 <NavDropdown.Item href="#">Nutrition Info</NavDropdown.Item>
//                                 <NavDropdown.Item href="#">Goals</NavDropdown.Item>
//                                 <NavDropdown.Item href="#">Progress Tracking</NavDropdown.Item>
//                                 <NavDropdown.Item href="#">Personalize Diet</NavDropdown.Item>
//                                 <NavDropdown.Item href="#">Integration</NavDropdown.Item>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item href="#">Shopping</NavDropdown.Item>
//                             </NavDropdown>
//                             <Nav.Item className="ms-3">
//                                 <Nav.Link href="#">Calculator</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item className="ms-3">
//                                 <Nav.Link href="#">Articles</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item className="ms-3">
//                                 <Nav.Link href="#">Help</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item className="ms-3">
//                                 <Nav.Link href="#">Login</Nav.Link>
//                             </Nav.Item>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </div>
//             </Navbar>
//         </>
//     )
// }

// export default Navbars