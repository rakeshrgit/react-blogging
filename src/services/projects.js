import apiService from './httpServices'
import { globalConstants, globalCommentConstants } from "../globalvariables";
//import function from './../networkDetector/networkDetector';
const APIBASEURL = globalConstants.BASE_URL;
const APIBASEURLCT = globalCommentConstants.BASE_URL;


export function getPosts() {
    const projectsEndpoint = APIBASEURL + "blogs";
    return apiService.get(projectsEndpoint);
}



export function getsingle(id) {
  //console.log('id', id)
  const projectsEndpoint = APIBASEURL + "blogs/" + id;
  //console.log('projectsEndpoint', projectsEndpoint)
  return apiService.get(projectsEndpoint);
}

export function getcomment(item) {
  //console.log('gtitem', item)
  const projectsEndpoint = APIBASEURLCT + "comment/cpost";
   console.log('projectsEndpoint', projectsEndpoint)
   return apiService.post(projectsEndpoint,item,{
     headers: {
         'Content-Type': 'application/json',
    }
 });
}

export function getAllComment() {
  const projectsEndpoint = APIBASEURLCT + "comment/cpost";
  return apiService.get(projectsEndpoint);
}

// export function deletecomment(commnetParentId, id) {
//   const projectsEndpoint = APIBASEURL + "api/blogs/" + commnetParentId.id + '/commentsCheck4BlogPost/' + id;
//   console.log('projectsEndpoint', projectsEndpoint)
//    return apiService.patch(projectsEndpoint,commnetParentId,{
//      headers: {
//          'Content-Type': 'application/json',
//     }
//  });
// }

export function createPost(data) {
    //console.log('data', data)
   const projectsEndpoint = APIBASEURL + "blogs";
    //console.log('projectsEndpoint', projectsEndpoint)
    return apiService.post(projectsEndpoint,data,{
      headers: {
          'Content-Type': 'application/json',
      }
     
  });
  }


  export function deletePost(id) {
    const projectsEndpoint = APIBASEURL + "blogs/" + id;
   //console.log('projectsEndpoint', projectsEndpoint)
    return apiService.delete(projectsEndpoint,id,{
      headers: {
          'Content-Type': 'application/json',
    }
     
  });
  }


  export function updatePost(item) {
   const projectsEndpoint = APIBASEURL + "blogs/" + item.id;
   return apiService.put(projectsEndpoint,item,{
     headers: {
         'Content-Type': 'application/json',
    }
    
 });
 }