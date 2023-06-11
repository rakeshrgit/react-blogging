import React, { useState, useContext, useEffect   } from 'react';
import { Container } from "react-bootstrap";
import axios from "axios";
import ProjectsContext from '../../context/projectsContext';
import ReceecentPosts from './../post/recentPosts';
const ShowComment = () =>{
    const currentContext = useContext(ProjectsContext)
    useEffect( () => {
        currentContext.getAllSinglecomment()
    }, [])
    const{comments} = currentContext; 
    return (
        <Container>
            <div className="page-bg">
                {comments?.map(mcomment => (
                    <div className="card mb-4" key={mcomment.id}>
                        <div className="card-body                                                                 ">    
                            <div className="b-text mb-3">
                                <strong>Name</strong><br/>
                                {mcomment.name}
                            </div>
                            <div className="b-text mb-3">
                                <strong>Email</strong><br/>
                                {mcomment.email}
                            </div>
                            <div className="b-text">
                                <strong>Description</strong><br/>
                                {mcomment.description}
                            </div>
                        </div>    
                    </div>    
                ))}
            </div>
        </Container>
    )
}
export default ShowComment;