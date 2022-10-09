import React, { useState, useContext, useEffect } from 'react';
import "./scss/dashboard.css";
import ProjectsContext from '../../context/projectsContext';
import EditPostNew from './../Modal/editModal/editPostNew';
import { useNavigate } from "react-router-dom";
import Loader from "../../images/loader.gif";
const DashboardNew = () => {
    const navigate = useNavigate();
    const currentContext = useContext(ProjectsContext)
    const [blogInfo, setBlogInfo] = useState({
        requiredItem: 0,
        postid: null,
        singlepostid:null,
        showmodal:false,
      });
      
      useEffect( () => {
        currentContext.getAllPosts()
    }, [])
    
    const handleSinglePosts = (id) => {
        navigate(`/single-blog/${id}`);
      };

    const handleDelete = async id => {
        //console.log('id', id)
        await setBlogInfo({ id });  
        currentContext.onDeletePost(id);  
        //console.log('postiddelete', blogInfo.id)
    }; 

    const replaceModalItem = (index) => {
        setBlogInfo({
          showmodal:true,  
          requiredItem: index
        });
      
    }
    const handleShow = (index) =>{
        setBlogInfo({showmodal:true, index})
        //console.log('post', index) 
    }

    const handleModalClose = () =>{
        setBlogInfo({show:false})
     }
    
    const closeModalDetails =  () => {
        setBlogInfo({showmodal:false})
        //await this.context.onUpdatePost(item);  
    } 

    const saveModalDetails =  async item => {
       // console.log('item333', item)
        setBlogInfo({showmodal:false})
        await currentContext.onUpdatePost(item);  
    }

    const{posts} = currentContext;
    const requiredItem = blogInfo.requiredItem;
    const modalData = posts[requiredItem];
    console.log('posts', posts)
    if(posts.length > 0){
        return ( 
            <React.Fragment>
                <div className="container text-start">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="post-main">
                                {posts?.map((post, index)=>(
                                    <div key={post._id} className="mb-5 bg-post">
                                        <div className="text-center">{post.fileUpload ? <img src={post.fileUpload} alt="Post" />: 'no image'}</div>
                                        <div className="bg-post-inner">
                                            <div className="post-creater">{post.creator}</div>
                                            <div className="post-title">{post.title}</div>
                                            <div className="t-trc" dangerouslySetInnerHTML={{__html:post.description}}></div>
                                            <div className="d-flex w-100 justify-content-between align-items-center mt-4">
                                                <div className="date">{post.createdAt}</div>
                                                <div className="text-end icon-feature">
                                                    <button  className="btn btn-sm mx-2"
                                                        onClick={()=> {
                                                            handleShow(index); 
                                                            replaceModalItem(index);
                                                            
                                                        }}
                                                    >
                                                        <i className="fa fa-pencil fa-lg"></i>
                                                    </button>
                                                    <button  className="btn btn-sm mx-2" onClick={() => handleDelete(post._id)}>
                                                        <i className="fa fa-trash-o fa-lg"></i>
                                                    </button>
                                                    <button className="btn  btn-sm" onClick={() => handleSinglePosts(post._id)}><i className="fa fa-eye fa-lg"></i></button>
                                                </div>
                                            </div>    
                                        </div>                
                                    </div>
                                ))}
                            </div> 
                        </div>
                        <div className="col-md-3"> 
                            weewew
                        </div>                            
                    </div>                                
    
    
                        {/*<table className="table w-100">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Creator</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {posts?.map((post, index)=>(
                                <tr key={post._id}>
                                    <td>{post.title}</td>        
                                    <td className="sss" dangerouslySetInnerHTML={{__html:post.description}}></td>
                                    <td>{post.creator}</td>
                                    <td>
                                            {post.fileUpload ? <img src={post.fileUpload} height="200px" width="200px" alt="Post" />: 'no image'}
                                    </td>
                                    <td>
                                    <button  className="btn btn-primary btn-sm mx-2"
                                        onClick={()=> {
                                            handleShow(index); 
                                            replaceModalItem(index);
                                            
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button  className="btn btn-danger btn-sm mx-2" onClick={() => handleDelete(post._id)}>Delete</button>
                                    <button className="btn btn-success btn-sm" onClick={() => handleSinglePosts(post._id)}>Read More</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>*/}
                </div>
                <EditPostNew
                    show={blogInfo.showmodal}
                    close={handleModalClose} 
                    title={modalData && modalData.title && modalData.title}
                    id={modalData && modalData._id}
                    description={modalData && modalData.description && modalData.description}
                    closeModalDetails={closeModalDetails}
                    saveModalDetails={saveModalDetails}   
                />
            </React.Fragment>
         );
    }else{
        return <div className="loading">
            <img src={Loader} alt="loader" />
        </div>
    }
}
 
export default DashboardNew;
