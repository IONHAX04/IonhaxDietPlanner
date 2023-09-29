import React from 'react'

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

import { Col, Row } from 'react-bootstrap';
import '../12 - Footer/Footer.css';

export default function Footer() {

    const [showTermsOfUse, setShowTermsOfUse] = useState(false);
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

    const handleShowTermsOfUse = () => setShowTermsOfUse(true);
    const handleCloseTermsOfUse = () => setShowTermsOfUse(false);

    const handleShowPrivacyPolicy = () => setShowPrivacyPolicy(true);
    const handleClosePrivacyPolicy = () => setShowPrivacyPolicy(false);

    return (
        <div className='bottom'>
            <Row className='footerContent'>
                <Col lg={6}>
                    <h5>COPYRIGHT © 2023 - Diet Planner - Ionhax. All Rights Reserved.</h5>
                </Col>

                <Col lg={3}>
                    <h5 onClick={handleShowTermsOfUse}>Terms of Use</h5>
                    <Offcanvas show={showTermsOfUse} onHide={handleCloseTermsOfUse} backdrop="static">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Terms Of Use</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body style={{ textAlign: 'justify' }}>
                            <h4>1. Acceptance of Terms</h4>
                            <ul>
                                <li>
                                    By accessing or using the Online Diet Plan Generator ("the App") provided by [Your Company Name],
                                    you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms,
                                    please do not use the App.
                                </li>
                            </ul>

                            <h4>2. User Registration</h4>
                            <ul>
                                <li>To access certain features of the App, you may be required to register for an account. You agree to provide accurate and complete information during the registration process and to update such information to keep it accurate and current.</li>
                            </ul>

                            <h4>3. Use of the App</h4>
                            <ul>
                                <li>You may use the App for personal, non-commercial purposes only.</li>
                                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                                <li>You agree not to engage in any activity that interferes with or disrupts the operation of the App.</li>
                            </ul>

                            <h4>4. Personalized Diet Plans</h4>
                            <ul>
                                <li>The App provides personalized diet plans based on user-provided information. These plans are for informational purposes only and should not replace professional medical advice. Consult a healthcare provider before making any significant dietary changes.</li>
                            </ul>

                            <h4>5. Privacy and Data Security</h4>
                            <ul>
                                <li>Your use of the App is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal information.</li>
                            </ul>

                            <h4>6. Disclaimers</h4>
                            <ul>
                                <li>Diet Planner is not responsible for the accuracy or completeness of the information provided by the App.</li>
                                <li>Diet Planner is not liable for any damages or harm resulting from the use of the App.</li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>

                <Col lg={3}>
                    <h5 onClick={handleShowPrivacyPolicy}>Privacy Policy</h5>
                    <Offcanvas show={showPrivacyPolicy} onHide={handleClosePrivacyPolicy} backdrop="static">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Privacy Policy</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <h4>1. Information Collection</h4>
                            <ul>
                                <li>We collect personal information provided during the registration process, such as name, age, gender, and dietary preferences.</li>
                                <li>We may collect usage data and analytics to improve the App's performance.</li>
                            </ul>

                            <h4>2. Use of Information</h4>
                            <ul>
                                <li>We use the information collected to provide personalized diet plans and improve user experience.</li>
                                <li>We may use anonymized data for research and analysis.</li>
                            </ul>

                            <h4>3. Data Security</h4>
                            <ul>
                                <li>We take measures to protect your data, but no method of transmission over the internet or electronic storage is completely secure.</li>
                                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                            </ul>

                            <h4>4. Sharing of Information</h4>
                            <ul>
                                <li>We do not sell or share your personal information with third parties without your consent.</li>
                                <li>We may share anonymized data for research and analysis purposes.</li>
                            </ul>

                            <h4>5. Cookies and Tracking</h4>
                            <ul>
                                <li>We use cookies and tracking technologies to improve user experience and gather analytics.</li>
                            </ul>

                            <h4>6. Children's Privacy</h4>
                            <p>The App is not intended for use by individuals under the age of 13. We do not knowingly collect information from children.</p>

                            <h4>7. Contact Information</h4>
                            <p>For questions or concerns regarding this Privacy Policy, please contact us at [Contact Email].</p>

                            <p>By using the App, you agree to the terms outlined in this Privacy Policy.</p>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>
            </Row>
        </div>
    )
}
