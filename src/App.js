import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/dashboard/dashboard';
import { ProjectsContext } from './context/projectsContext';
import CreateNewPost from './component/createpost/createNewpost';
import Navbar from './common/navbar';
import NotFound from './component/notfound/notFound';
import CreateNewPostFn from './component/createpost/createNewpostFn';

function App() {
  return (
    <div className="App">
      <ProjectsContext>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/> 
          <Route path='/Create-Post' element={<CreateNewPostFn/>}/> 
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>

      
      </ProjectsContext>  
    </div>
  );
}

export default App;
