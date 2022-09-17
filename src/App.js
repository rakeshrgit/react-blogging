import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard/dashboard';
import { ProjectsContext } from './context/projectsContext';
import CreateNewPost from './component/createpost/createNewpost';

function App() {
  return (
    <div className="App">
      <ProjectsContext>
        <Dashboard/>
        <CreateNewPost/>
      </ProjectsContext>  
    </div>
  );
}

export default App;
