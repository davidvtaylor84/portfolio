import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from './components/Homepage';
import PythonProject from './components/PythonProject';
import NavBar from './components/NavBar';
import JavaScriptProject from './components/JavaScriptProject';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
          <Routes>
            <Route path='/portfolio' element={<Homepage/>}/>
            <Route path='/portfolio/python'element={<PythonProject/>}/>
            <Route path='/portfolio/javascript'element={<JavaScriptProject/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
