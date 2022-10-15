import React, { useContext, useState, useEffect } from 'react';
import { Button, Form, Container, Alert, Toast  } from 'react-bootstrap';
import {useUserAuth} from "../context/UserAuthContext";
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom'
function useQuery() {
    return new URLSearchParams(useLocation().search)
}
const ResetPasswordPage = () => {
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, showMessage] = useState(false)
    const { resetPassword  } = useUserAuth();
    const query = useQuery()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("");
        try{
            setLoading(true)
            await resetPassword(query.get('oobCode'), password)
            toast.success(`Password has been changed, you can login now.`)
            setLoading(false)
        }catch(err){
            setLoading(false)
            setError(err.message)
        }
       
    }
    return ( 
        <Container>
            <div className="account-form-bg text-start"> 
                <h2 className="mb-4">Reset Password</h2>
                {error && 
                <Toast  className="d-block " bg='warning'>
                    <Toast.Header closeButton={false}>
                        <strong className="me-auto">Reset Password</strong>
                    </Toast.Header>    
                    <Toast.Body className='warning'>
                        {error}
                    </Toast.Body>    
                </Toast>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Reset Pasword</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Enter Password" 
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
                <ToastContainer /> 
            </div>       
        </Container>
    );
}
 
export default ResetPasswordPage;
