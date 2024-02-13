import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    console.log("login user function issue");
    setAuthenticate(true);
    navigate('/');
  }
  return (
    <div>
      <Container>
        <Form onSubmit={(e) => loginUser(e)} >
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder='Email'/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder='Password'/>
        </Form.Group>
        <Button variant="danger" type="submit">Login</Button>
      </Form>
    </Container>
    </div>
  )
}

export default Login

