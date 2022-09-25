import React, { useContext, useState } from 'react';
import { Button, Form, Container, Alert  } from 'react-bootstrap';
import { NavLink, useNavigate  } from "react-router-dom";
import {useUserAuth} from "../../context/UserAuthContext"
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    console.log('signUp', signUp)
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("");
        try{
            await signUp(email, password, name)
            navigate("/login");

        }catch(err){
            setError(err.message)
        }
    }
    return ( 
        <Container>
            <h2>Firebase Auth Signup</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Name" 
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
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
                    Signup
                </Button>
            </Form>
            <div className="p-4 box mt-3 text-center">
                Don't have an account <NavLink to="/login">Log In</NavLink>
            </div>
        </Container>
     );
}
 
export default Signup;
