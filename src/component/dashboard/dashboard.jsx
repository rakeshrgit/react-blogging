import React, { Component } from 'react';
import ProjectsContext from '../../context/projectsContext';
import CreateNewPostFn from './../createpost/createNewpostFn';
import EditPost from './../Modal/editModal/editPost';
import EditPostNew from './../Modal/editModal/editPostNew';


class Dashboard extends Component {
    state = { 
        requiredItem: 0,
        postid: null,
        showmodal:false,
     } 
    static contextType = ProjectsContext; 

    componentDidMount() {
      
        this.context.getAllPosts();
        
    }
    handleDelete = async id => {
        //console.log('id', id)
        await this.setState({ postid: id });  
         this.context.onDeletePost(this.state.postid);  
    }; 
    replaceModalItem = (index) => {
        this.setState({
          requiredItem: index
        });
      
      }
    handleShow = (index) =>{
        this.setState({showmodal:true, index})
        //console.log('post', index) 
      }
      handleClose = (index) =>{
        this.setState({showmodal:true, index})
        //console.log('post', index) 
      }  
      handleModalClose = () =>{
        this.setState({show:false})
     }
    saveModalDetails =  async item => {
        this.setState({showmodal:false})
        await this.context.onUpdatePost(item);  
    }
    closeModalDetails =  () => {
        this.setState({showmodal:false})
        //await this.context.onUpdatePost(item);  
    }
    render() { 
        const{posts} = this.context;
        const requiredItem = this.state.requiredItem;
        const modalData = posts[requiredItem];
        //console.log('modalData', modalData)
        return (
            <div>
                <div className="container text-start">
                    <table className="table w-100">
                        <tbody>
                        {posts.map((post, index)=>(
                            <tr key={post._id}>
                                <td>{post.title}</td>        
                                <td>{post.description}</td>
                                <td>{post.creator}</td>
                                <td>
                                        {post.fileUpload ? <img src={post.fileUpload} height="200px" width="200px" alt="Post" />: 'no image'}
                                </td>
                                <td>
                                    <button  className="btn btn-primary btn-sm mx-2"
                                        onClick={()=> {
                                            this.handleShow(index); 
                                            this.replaceModalItem(index); 
                                            
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button  className="btn btn-danger btn-sm" onClick={() => this.handleDelete(post._id)}>Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                {/* <EditPost
                    show={this.state.showmodal}
                    close={this.handleModalClose} 
                    title={modalData && modalData.title && modalData.title}
                    description={modalData && modalData.description && modalData.description}
                    saveModalDetails={this.saveModalDetails}
                    closeModalDetails={this.closeModalDetails}
                /> */}
                <EditPostNew
                    show={this.state.showmodal}
                    close={this.handleModalClose} 
                    title={modalData && modalData.title && modalData.title}
                    description={modalData && modalData.description && modalData.description}
                    saveModalDetails={this.saveModalDetails}
                    closeModalDetails={this.closeModalDetails}
                />
            </div>
        );
    }
}
 
export default Dashboard;