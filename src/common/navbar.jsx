import React from 'react';
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, NavLink  } from "react-router-dom";
import Logo from "../images/logo.png";
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
      <React.Fragment>
        <header className="header-main">
          <div className="navbar">
              <Container>
                  <div className="menu-nav">   
                      <ul className="d-flex align-items-center list-unstyled mb-0"> 
                          <li><NavLink end to="/">Home</NavLink></li>
                          <li><NavLink to="/about">About Us</NavLink></li>
                          <li><NavLink to="/create-post">Create Post</NavLink></li>
                          {user && user.email ? <li className="logout"><Button variant="primary" onClick={handleLogout}>Log out</Button></li>:  <li><NavLink to="/login" >Login</NavLink></li>}   
                          <li><NavLink to="/signup">Signup</NavLink></li>
                      </ul>
                  </div>
              </Container>
          </div>
        </header>
        <div className="v-logo">
          <Link>
             <img src={Logo} alt="Logo"/> 
          </Link>
        </div>
      </React.Fragment>  
     );
}
 
export default Navbar;
