import React,{useState, useContext, useEffect} from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router";
import axios from 'axios';
import ProjectsContext from '../../context/projectsContext';
// import { useUserAuth } from "../../context/UserAuthContext";

const CommentBlog = (props) => {
    const currentContext = useContext(ProjectsContext)

   // console.log('currentContext', currentContext)
    //const navigate = useNavigate();
    const [comment, setComment] = useState({
        name: "",
        email: "",
        description: "",
    });
    
    useEffect( () => {
        currentContext.getAllSinglecomment()
    }, [])

    const { id } = useParams();
    
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
        }   
        
        

            function disabledAddPost() {
                const infodisable = { ...comment };
                if (infodisable.name === "" || infodisable.description === "") {
                  return true;
                } else {
                  return false;
                }
              }

            const{post} = currentContext;
            const{comments} = currentContext; 
            //console.log('comments', comments)     
            // const handleCommentDelete = (id) =>{
            //     const commnetParentId = {
            //       id:props.id
            //     };
            //     console.log('commnetDeletaData', commnetParentId)    


            //     //console.log('item', item);
            //     currentContext.onDeleteComment(commnetParentId, id); 
            //     //console.log('id', id);
            // } 

    return ( 
        <Container>
           <React.Fragment>
        <section className="mt-4">
            <div className="container text-start">
                <div>
                {comments?.map(mcomment => (
                    <div className="mb-4" key={mcomment.id}>
                        <div>{mcomment.name}</div>
                        <div>{mcomment.email}</div>
                        <div>{mcomment.description}</div>
                        
                        
                       
                    </div>    
                ))}
                </div>
                <div className="form-post">
                    <h1 className="mb-3">Comment Post</h1>
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
     );
}
 
export default CommentBlog;
