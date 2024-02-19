import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = () => {
  let [id, setId] = useState();
  let [password, setPassword] = useState();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(authenticateAction.login(id, password));
    navigate('/');
  }
  
  return (
    <div>
      <Container className="login-area">
        <Form className="login-form" onSubmit={(e) => loginUser(e)} >
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder='Email' onChange={(e) => setId(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group> 
        <Button variant="danger" type="submit">Login</Button>
      </Form>
    </Container>
    </div>
  )
}

export default Login

