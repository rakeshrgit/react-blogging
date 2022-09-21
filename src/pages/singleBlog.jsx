import React, { useEffect, useState, useContext } from "react";
import ProjectsContext from '../context/projectsContext';
import { useParams } from "react-router-dom";
import axios from "axios";
import FileBase from "react-file-base64";
const SingleBlog = () => {
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
        </div>
     );
}
 
export default SingleBlog;