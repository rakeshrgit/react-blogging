import apiService from './httpServices'
import { globalConstants } from "../globalvariables";
//import function from './../networkDetector/networkDetector';
const APIBASEURL = globalConstants.BASE_URL;


export function getPosts() {
    const projectsEndpoint = APIBASEURL + "api/blogs";
    return apiService.get(projectsEndpoint);
}


export function createPost(data) {
    //console.log('data', data)
    //const authToken = localStorage.getItem( 'token' );
    //console.log('authToken', authToken)
    const projectsEndpoint = APIBASEURL + "api/blogs";
    //console.log('projectsEndpoint', projectsEndpoint)
    
  }