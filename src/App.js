import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard/dashboard';
import { ProjectsContext } from './context/projectsContext';

function App() {
  return (
    <div className="App">
      <ProjectsContext>
        <Dashboard/>
      </ProjectsContext>  
    </div>
  );
}

export default App;
