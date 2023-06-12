import React, {useContext, useEffect   } from 'react';
import { Container } from "react-bootstrap";
import ProjectsContext from '../../context/projectsContext';
import { Link  } from "react-router-dom";
const ShowComment = () =>{
    const currentContext = useContext(ProjectsContext)
    useEffect( () => {
        currentContext.getAllSinglecomment()
    }, [])
    const{comments} = currentContext; 
    return (
        <Container>
            <div className="page-bg">
                <section className="mt-4 mb-4">
                    <div className="container text-start">
                        <div className="text-center create-comment">
                                <Link className="btn btn-primary" to="/">Go Back</Link>
                        </div>
                    </div>
                </section>
                {comments?.map(mcomment => (
                    <div className="card mb-4" key={mcomment.id}>
                        <div className="card-body">    
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