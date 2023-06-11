import React,{useState, useContext, useEffect} from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { NavLink  } from "react-router-dom";
import axios from 'axios';
import ProjectsContext from '../../context/projectsContext';
const CreateComment = () =>{
    const currentContext = useContext(ProjectsContext)

   // console.log('currentContext', currentContext)
    const navigate = useNavigate();
    const [comment, setComment] = useState({
        name: "",
        email: "",
        description: "",
    });
    
    //const { id } = useParams();
    
    const handleInputChange = (event) => {
        setComment( {...comment, [ event.target.name ]: event.target.value } );
        }
        const handleFormSubmit = (e) => {
            e.preventDefault();
            const commnetData = {
                name: comment.name,
                email: comment.email,
                description: comment.description,
                //id:props.id
                //status: 'publish'
            };
            //console.log('commnetData', commnetData)
            currentContext.getSingleComment(commnetData);

            //for blank input
            setComment({commnetData:''})
            navigate('/all-comment')
        }   
        
        function disabledAddPost() {
            const infodisable = { ...comment };
            if (infodisable.name === "" || infodisable.description === "") {
                return true;
            } else {
                return false;
            }
        }
        //const{post} = currentContext;
    return (
        <div>
            <Container>
           <React.Fragment>
        <section className="mt-4">
            <div className="container text-start">
                <div className="form-post">
                    <h1 className="mb-3">Post Comment</h1>
                    <form onSubmit={ handleFormSubmit }>
                        <div className="form-group mb-3">
                            <label>Name</label>
                            <input 
                                className="form-control" 
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={ handleInputChange }
                                value ={comment.name || ''}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Email</label>
                            <input 
                                className="form-control" 
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={ handleInputChange }
                                required
                                value ={comment.email || ''}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Description</label>
                            <textarea 
                                className="form-control"
                                placeholder="Project Description"
                                name="description"
                                onChange={handleInputChange }
                                value ={comment.description || ''}
                            ></textarea>
                        </div>
                        
                        <div className="text-end mt-5 form-btn">
                            <Button
                            variant="primary"
                            size="lg"
                            type="submit"
                            //onClick={e => this.addPost(e)}
                            disabled={disabledAddPost()}
                            >
                            Submit
                            </Button>
                        </div>
                    </form>
                </div>        

            </div>
        </section>
    </React.Fragment>
        </Container>
        </div>
    )
}
export default CreateComment;