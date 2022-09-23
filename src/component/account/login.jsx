import React, { useContext, useState } from 'react';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import GoogleButton from 'react-google-button'
import { NavLink, useNavigate  } from "react-router-dom";
import {useUserAuth} from "../../context/UserAuthContext"
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn } = useUserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("");
        try{
            await logIn(email, password)
            navigate("/comment");

        }catch(err){
            setError(err.message)
        }
    }
    return ( 
        <Container>
            <h2>Firebase Auth Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        type="email" 
                        placeholder="Enter email" 
                        onChange={(e) => setEmail(e.target.value)}    
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <hr/>
            <div>
                <GoogleButton className="g-button" type="dark"/>
            </div>
            <div className="p-4 box mt-3 text-center">
                Don't have an account <NavLink to="/signup">Sign Up</NavLink>
            </div>
        </Container>
     );
}
 
export default Login;
