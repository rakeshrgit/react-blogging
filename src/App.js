import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/dashboard/dashboard';
import { ProjectsContext } from './context/projectsContext';
import CreateNewPost from './component/createpost/createNewpost';
import Navbar from './common/navbar';
import NotFound from './component/notfound/notFound';
import CreateNewPostFn from './component/createpost/createNewpostFn';
import SingleBlog from './pages/singleBlog';
import DashboardNew from './component/dashboard/dashboardNew';
import Login from './component/account/login';
import Signup from './component/account/signup';
import ProtectedRoute from './component/account/ProtectedRoute';
import {UserAuthContextProvider} from "./context/UserAuthContext"
import About from './pages/about';
import ProfilePage from './pages/profile';
import ForgotPassword from './pages/forgotPassword';
import ResetPasswordPage from './pages/resetPassword';
import CreateComment from './component/comment/createComment';
import ShowComment from './component/comment/showComment';

function App() {
  return (
    <div className="App">
        <ProjectsContext>
        <Router>
         
          <UserAuthContextProvider>  
          <Navbar/>
            <Routes>
              {/* <Route exact path='/' element={<Dashboard/>}/>  */}
              <Route exact path='/' element={<DashboardNew/>}/> 
              <Route path='/about'  element={<About/>}/> 
              <Route path='/create-post' element={<CreateNewPostFn/>}/> 
              <Route path='/single-blog/:id' element={<SingleBlog/>}/> 
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/create-comment" element={<CreateComment />}/>
              <Route path="/all-comment" element={<ShowComment />}/>
              <Route path='/login'  element={<Login/>}/> 
              <Route path='/signup' element={<Signup/>}/> 
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
              <Route path='/reset-password' element={<ResetPasswordPage/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </UserAuthContextProvider>
        </Router>
        </ProjectsContext>  
        
    </div>
  );
}

export default App;
