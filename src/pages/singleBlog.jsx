import React, { useEffect, useState, useContext } from "react";
import ProjectsContext from '../context/projectsContext';
import { useParams } from "react-router-dom";
import { NavLink  } from "react-router-dom";
import axios from "axios";
import FileBase from "react-file-base64";
import CommentBlog from './../component/comment/commentBlog';
import {useUserAuth} from "../context/UserAuthContext"
import ReceecentPosts from './../component/post/recentPosts';
const SingleBlog = () => {
    const {  user } = useUserAuth();
    const currentContext = useContext(ProjectsContext)
    const { id } = useParams();
    useEffect( () => {
        currentContext.getSinglePost(id);
        currentContext.getAllPosts();
    }, [])
    const{post, posts} = currentContext;
    //console.log('post444', post)
    return ( 
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="left-sectoion pe-3">
                            <div className="page-main">
                                <div className="page-bg p-0">
                                    <div className="p-s-img">{post.avatar ? <img src={post.avatar}  alt="Post" />: 'no image'}</div>
                                    <div className="bg-post-inner">
                                        <div className="post-creater">{post.name}</div>
                                        <div className="post-title">{post.title}</div>
                                        <div className="mb-4" dangerouslySetInnerHTML={{__html:post.description}}></div>
                                        <div>
                                            {user && user.email ?  <CommentBlog id={id}/>:  <div className="alert alert-primary c-info">Please <NavLink to="/login">Login</NavLink> for any type of comment</div>}
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-3">
                    <div className="r-post-main">                                            
                            <h5 className="text-center"><span>MUST-READ ARTICLES</span></h5>                            
                            {posts.slice(0, 3)?.map(item=>(
                                <ReceecentPosts 
                                    key={item.id}
                                    title={item.title}
                                    pimg={item.avatar}
                                    dateCreated={item.createdAt}
                                />
                            ))}                                
                        </div>  
                    </div>    

                </div>
            </div>
        </React.Fragment>
     );
}
 
export default SingleBlog;