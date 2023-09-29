import React from 'react'
import '../11 - 01 - Login/Login.css';
import { Form, Button, InputGroup, Col } from 'react-bootstrap';

import Google from '../../../assets/images/Login/google.png';
import Facebook from '../../../assets/images/Login/facebook.png';

export default function SignUp() {

  const login = () => {
    window.location.href="/login";
  }
  return (
    <div className='loginBody'>
      <div className="container">
        <div className="card col-lg-6 col-12">
          <h2>Create account</h2>
          <div className="row">
            <Form>
              <Button className='col-lg-6 btns' variant="outline-info">
                <img
                  alt=""
                  src={Facebook}
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                />{' '}
                Continue With Facebook</Button>{' '}
              <Button className='col-lg-6 btns mb-2' variant="outline-info">
                <img
                  alt=""
                  src={Google}
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                />{' '}
                Continue With Google</Button>{' '}
              <Form.Label className='col-lg-6 mb-2'>or continue with your email</Form.Label>

              <InputGroup >
                <Col lg={6} className="mx-auto mb-2">
                  <Form.Control
                    type='text'
                    placeholder="Username"
                  />
                </Col>
              </InputGroup>
              <InputGroup >
                <Col lg={6} className="mx-auto mb-2">
                  <Form.Control
                    type='emai'
                    placeholder="Email"
                  />
                </Col>
              </InputGroup>
              <InputGroup>
                <Col lg={6} className="mx-auto mb-2">
                  <Form.Control
                    type='password'
                    placeholder="Password"
                  />
                </Col>
              </InputGroup>
              <Form.Label className='col-lg-6 mb-2'>Never Shared!! Never Spammed!!</Form.Label>
              <Button className='col-lg-6 btns mb-2' variant='outline-warning'>Continue</Button>{' '}
              <Form.Label className='col-lg-6 mb-2' onClick={login}>Already have an account? Login here</Form.Label>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
