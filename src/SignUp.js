import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

export default function SignUp () {
    return (
        <Container id="landing-container">
            <Row className="justify-content-md-center">
              <Col xs={5}>
                <div className='content'>
                  <h3 id='description'>
                    Effective Internal Communication
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </Col>
              <Col xs={5} id='signup-container'>
                <div className='content'>
                  <h4>Sign Up</h4>
                  <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="I accept the Terms and Conditions" />
                    </Form.Group>
                    <Button id='signup'><Link to={'/user/dashboard'}>Sign Up</Link></Button>
                  </Form>
                  <p>or</p>
                  <h4>Log In </h4>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button id='login'><Link to={'/user/dashboard'}>Log In</Link></Button>
                  </Form>
                </div>
              </Col>
            </Row>
            
        </Container>
    )
}