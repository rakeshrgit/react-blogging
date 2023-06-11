import React,{useState, useContext, useEffect} from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { NavLink  } from "react-router-dom";
import axios from 'axios';
import ProjectsContext from '../../context/projectsContext';
// import { useUserAuth } from "../../context/UserAuthContext";

const CommentBlog = (props) => {
    

    return ( 
        <Container>
           <React.Fragment>
                <section className="mt-4">
                    <div className="container text-start">
                        <div className="text-center create-comment">
                            <NavLink to = '/create-comment' className="btn btn-primary">Post Comment</NavLink>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        </Container>
     );
}
 
export default CommentBlog;
