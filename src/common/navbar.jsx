import React, { Component } from 'react';
import { Outlet, Link, NavLink  } from "react-router-dom";
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="menu-nav">   
                        <ul className="d-flex list-unstyled mb-0"> 
                            <li className="me-2"><NavLink to="/">Home</NavLink></li>
                            <li className="me-2"><NavLink to="/Create-Post">Create Post</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Navbar;