import React from 'react';
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Outlet, Link, NavLink  } from "react-router-dom";
//import { isLoggedIn } from '../../function/function';
const Navbar = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
      //window.location.href = '/';
    };
   
    return ( 
        <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="menu-nav">   
                        <ul className="d-flex list-unstyled mb-0"> 
                            <li className="me-2"><NavLink to="/">Home</NavLink></li>
                            <li className="me-2"><NavLink to="/create-post">Create Post</NavLink></li>
                            {user && user.email ? <Button variant="primary" onClick={handleLogout}>Log out</Button>:  <li className="me-2"><NavLink to="/login">Login</NavLink></li>}   
                            <li className="me-2"><NavLink to="/signup">Signup</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
     );
}
 
export default Navbar;
