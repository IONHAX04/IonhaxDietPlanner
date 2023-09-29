import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthProvider';

import '../11 - 01 - Login/Login.css';
import { Form, Button, InputGroup, Col } from 'react-bootstrap';

import Google from '../../../assets/images/Login/google.png';
import Facebook from '../../../assets/images/Login/facebook.png';

export default function Login() {
  const navigate = useNavigate();
  
  const signUp = () => {
    navigate("/signUp");
  }
  
  const {isLoggedIn, login} = useAuth();

  const handleLogin = () => {
    login();
  }

  return (
    <div className='loginBody'>
      { isLoggedIn ? (
          navigate('/goals')
      ):(

      <div className="container">
        <div className="card col-lg-6 col-12">
          <h2>Login</h2>
          <div className="row">
            <Form>
              <Button className='col-lg-6 btns mb-2' variant="outline-info">
                <img
                  alt=""
                  src={Facebook}
                  width="18"
                  height="18"
                  className="d-inline-block align-top"
                />{' '}
                Continue With Facebook</Button>{' '}
              <Button className='col-lg-6 btns mb-2' variant="outline-info">
                <img
                  alt=""
                  src={Google}
                  width="18"
                  height="18"
                  className="d-inline-block align-top"
                />{' '}
                Continue With Google</Button>{' '}
              <Form.Label className='col-lg-6 mb-2'>or continue with your email</Form.Label>

              <InputGroup >
                <Col lg={6} className="mx-auto mb-2">
                  <Form.Control
                    placeholder="Username or email"
                  />
                </Col>
              </InputGroup>
              <InputGroup>
                <Col lg={6} className="mx-auto mb-2">
                  <Form.Control
                    placeholder="Password"
                  />
                </Col>
              </InputGroup>
              <Form.Label className='col-lg-6 mb-2'>Forgot your password?</Form.Label>
              <Button className='col-lg-6 btns mb-2' variant='outline-warning' onClick={handleLogin}>Continue</Button>{' '}
              <Form.Label className='col-lg-6 mb-2' onClick={signUp}>Don't have an account? Sign Up</Form.Label>
            </Form>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}
