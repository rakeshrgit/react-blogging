import React, { useContext, useState, useEffect } from 'react';
import { Button, Form, Container, Alert, Toast  } from 'react-bootstrap';
import GoogleButton from 'react-google-button'
import { NavLink, useNavigate  } from "react-router-dom";
import {useUserAuth} from "../../context/UserAuthContext"
const Login = () => {
    const { user } = useUserAuth();
    useEffect(() => {
        if (user) {
          navigate("/");
        }
      });
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn  } = useUserAuth();
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("");
        try{
            setLoading(true)
            await logIn(email, password)
            navigate("/");
            
        }catch(err){
            setLoading(false)
            setError(err.message)
        }
       
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
          await googleSignIn();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
    };
    
    return ( 
        <Container>
            <div className="account-form-bg text-start">    
                <h2 className="mb-4">Login</h2>
                {error && 
                <Toast  className="d-block " bg='warning'>
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Login</strong>
                    </Toast.Header>    
                    <Toast.Body className='warning'>
                        {error}
                    </Toast.Body>    
                </Toast>}
                <div className="mb-4 mt-4"> 
                    <GoogleButton 
                        className="g-button" 
                        type="dark"
                        onClick={handleGoogleSignIn}
                    />
                </div>
                <Form onSubmit={handleSubmit}>
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
                        <Button 
                            variant="primary btn-lg" 
                            type="submit"
                            >
                            {isLoading ? 'Loading…' : 'Submit'}
                        </Button>
                    </div>    
                </Form>
                <div className="p-4 box mt-3 text-center do-info">
                    Don't have an account <NavLink to="/signup">Sign Up</NavLink>
                </div>
            </div>
        </Container>
     );
}
 
export default Login;
