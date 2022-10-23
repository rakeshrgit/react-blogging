import React, { useState, useContext, useEffect } from 'react';
import "./scss/dashboard.css";
import ProjectsContext from '../../context/projectsContext';
import EditPostNew from './../Modal/editModal/editPostNew';
import { useNavigate } from "react-router-dom";
import Loader from "../../images/loader.gif";
import Pagination from './../../common/pagination';
import {paginate} from '../../utils/paginate';
import ReceecentPosts from './../post/recentPosts';
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
    const handlePageChange = page => {
        //console.log('page', page)
        currentContext.handlePageChange(page);   
       //this.setState({currentPage:page});
       
    };
    //const{posts} = currentContext;
    const{length:count} = currentContext.posts;
    const {  pageSize, currentPage, posts:allPosts} = currentContext;
    const posts = paginate(allPosts, currentPage, pageSize)
    const requiredItem = blogInfo.requiredItem;
    const modalData = posts[requiredItem];
    //console.log('count', count)
    //console.log('pageSize', pageSize)
    //console.log('currentPage', currentPage)
    if(count > 0){
        return ( 
            <React.Fragment>
                <div className="container text-start">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="left-sectoion pe-3">    
                                <div className="mb-4 av-post text-center">{count} Posts Available</div>
                                <div className="post-main">
                                    {posts?.map((post, index)=>(
                                        <div key={post._id} className="mb-4 bg-post">
                                            <div className="text-center">{post.fileUpload ? <img src={post.fileUpload} alt="Post" />: 'No Image Available'}</div>
                                            <div className="bg-post-inner">
                                                <div className="post-creater">{post.creator}</div>
                                                <div className="post-title">{post.title}</div>
                                                <div className="t-trc" dangerouslySetInnerHTML={{__html:post.description}}></div>
                                                <div className="d-flex w-100 justify-content-between align-items-center mt-4">
                                                    <div className="date">{post.createdAt}</div>
                                                    <div className="text-end icon-feature">
                                                        <button  className="btn btn-sm"
                                                            onClick={()=> {
                                                                handleShow(index); 
                                                                replaceModalItem(index);
                                                                
                                                            }}
                                                        >
                                                            <i className="fa fa-pencil fa-lg"></i>
                                                        </button>
                                                        <button  className="btn btn-sm" onClick={() => handleDelete(post._id)}>
                                                            <i className="fa fa-trash-o fa-lg"></i>
                                                        </button>
                                                        <button className="btn  btn-sm" onClick={() => handleSinglePosts(post._id)}><i className="fa fa-eye fa-lg"></i></button>
                                                    </div>
                                                </div>    
                                            </div>                
                                        </div>
                                    ))}
                                </div> 
                                <Pagination
                                    itemsCount={count}
                                    pageSize={pageSize}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange} 
                                    
                                />
                            </div>
                        </div>
                        <div className="col-md-3"> 
                            <div className="r-post-main">                                            
                                <h5 className="text-center"><span>MUST-READ ARTICLES</span></h5>                            
                                {posts.slice(0, 3)?.map(item=>(
                                    <ReceecentPosts 
                                        key={item._id}
                                        title={item.title}
                                        pimg={item.fileUpload}
                                        dateCreated={item.createdAt}
                                    />
                                ))}                                
                            </div>    
                        </div>                            
                    </div>                                
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
