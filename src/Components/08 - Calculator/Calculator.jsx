import React from 'react'
import Calorie from './Calorie/Calorie.jsx';
import Fat from './Fat/Fat.jsx';
import Navbar from '../00 - Navbar/Navbar.jsx';

import { Row, Col } from 'react-bootstrap'
import Footer from '../12 - Footer/Footer.jsx';

export default function Calculator() {
    return (
        <div>
            <Navbar />
            <Row>
                <Col lg={6}>
                    <Calorie />
                </Col>
                <Col lg={6}>
                    <Fat />
                </Col>
            </Row>
            <Footer />
        </div>
    )
}
