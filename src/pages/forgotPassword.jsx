import React, { useContext, useState, useEffect } from 'react';
import { Button, Form, Container, Alert, Toast  } from 'react-bootstrap';
import { useNavigate  } from "react-router-dom";
import {useUserAuth} from "../context/UserAuthContext";
import { ToastContainer, toast } from 'react-toastify';
const ForgotPassword = () => {
    const { user } = useUserAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
          navigate("/profile");
        }
      });
    const [email, setEmail] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, showMessage] = useState(false)
    const { forgotPassword  } = useUserAuth();
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("");
        try{
            setLoading(true)
            await forgotPassword(email)
            toast.success(`An email is sent to ${email} for password reset instructions.`)
            setLoading(false)
        }catch(err){
            setLoading(false)
            setError(err.message)
        }
       
    }
    return ( 
        <Container>
            <div className="account-form-bg text-start">    
                <h2 className="mb-4">Forgot Password</h2>
                {error && 
                <Toast  className="d-block " bg='warning'>
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Forgot Password</strong>
                    </Toast.Header>    
                    <Toast.Body className='warning'>
                        {error}
                    </Toast.Body>    
                </Toast>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            onChange={(e) => setEmail(e.target.value)}    
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
                <ToastContainer />  
            </div>            
        </Container>
     );
}
 
export default ForgotPassword;
