import apiService from './httpServices'
import { globalConstants } from "../globalvariables";
//import function from './../networkDetector/networkDetector';
const APIBASEURL = globalConstants.BASE_URL;


export function getPosts() {
    const projectsEndpoint = APIBASEURL + "api/blogs";
    return apiService.get(projectsEndpoint);
}



export function getsingle(id) {
  //console.log('id', id)
  const projectsEndpoint = APIBASEURL + "api/blogs/" + id;
  console.log('projectsEndpoint', projectsEndpoint)
  return apiService.get(projectsEndpoint);
}

export function getcomment(item) {
  //console.log('gtitem', item)
  const projectsEndpoint = APIBASEURL + "api/blogs/" + item.id + '/commentsCheck4BlogPost';
  console.log('projectsEndpoint', projectsEndpoint)
   return apiService.patch(projectsEndpoint,item,{
     headers: {
         'Content-Type': 'application/json',
    }
 });
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
   const projectsEndpoint = APIBASEURL + "api/blogs";
    //console.log('projectsEndpoint', projectsEndpoint)
    return apiService.post(projectsEndpoint,data,{
      headers: {
          'Content-Type': 'application/json',
      }
     
  });
  }


  export function deletePost(id) {
    const projectsEndpoint = APIBASEURL + "api/blogs/" + id;
   // console.log('projectsEndpoint', projectsEndpoint)
    return apiService.delete(projectsEndpoint,id,{
      headers: {
          'Content-Type': 'application/json',
    }
     
  });
  }


  export function updatePost(item) {
   const projectsEndpoint = APIBASEURL + "api/blogs/" + item.id;
   return apiService.patch(projectsEndpoint,item,{
     headers: {
         'Content-Type': 'application/json',
    }
    
 });
 }