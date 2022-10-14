import React, { useContext, useState } from 'react';
import { Button, Form, Container, Alert  , Toast} from 'react-bootstrap';
import { NavLink, useNavigate  } from "react-router-dom";
import {useUserAuth} from "../../context/UserAuthContext"
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("");
        try{
            setLoading(true)
            await signUp(email, password, name)
            navigate("/login");

        }catch(err){
            setLoading(false)
            setError(err.message)
        }
    }
    return ( 
        <Container>
            <div className="account-form-bg text-start">     
                <h2 className="mb-4">Signup</h2>
                {error &&
                <Toast  className="d-block " bg='warning'>
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Signup</strong>
                    </Toast.Header>    
                    <Toast.Body className='warning'>
                        {error}
                    </Toast.Body>    
                </Toast>
                }
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
                    <div className="text-end pt-3 form-btn">
                        <Button variant="primary btn-lg" type="submit">
                        {isLoading ? 'Loading…' : 'Signup'}
                        </Button>
                    </div>
                </Form>
                <div className="p-4 box mt-3 text-center do-info">
                    Don't have an account <NavLink to="/login">Log In</NavLink>
                </div>
            </div>
        </Container>
     );
}
 
export default Signup;
