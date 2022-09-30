import React, { useEffect, useState, useContext } from "react";
import ProjectsContext from '../context/projectsContext';
import { useParams } from "react-router-dom";
import { NavLink  } from "react-router-dom";
import axios from "axios";
import FileBase from "react-file-base64";
import CommentBlog from './../component/comment/commentBlog';
import {useUserAuth} from "../context/UserAuthContext"
const SingleBlog = () => {
    const {  user } = useUserAuth();
    const currentContext = useContext(ProjectsContext)
    const { id } = useParams();
    useEffect( () => {
        currentContext.getSinglePost(id)
    }, [])
    const{post} = currentContext;
    //console.log('post444', post)
    return ( 
        <div>
            <div>{post.title}</div>
            <div dangerouslySetInnerHTML={{__html:post.description}}></div>
            <div>{post.fileUpload ? <img src={post.fileUpload}  alt="Post" />: 'no image'}</div>
            <div>{post.creator}</div>
            <div></div>
            {user && user.email ?  <CommentBlog id={id}/>:  <li className="me-2">Please Login for any type of comment</li>}
           
        </div>
     );
}
 
export default SingleBlog;