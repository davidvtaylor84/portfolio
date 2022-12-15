import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from './components/Homepage';
import PythonProject from './components/PythonProject';
import NavBar from './components/NavBar';
import JavaScriptProject from './components/JavaScriptProject';
import JavaProject from './components/JavaProject';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Router>
        <NavBar/>
          <Routes>
            <Route path='/portfolio' element={<Homepage/>}/>
            <Route path='/portfolio/python'element={<PythonProject/>}/>
            <Route path='/portfolio/javascript'element={<JavaScriptProject/>}/>
            <Route path='/portfolio/java'element={<JavaProject/>}/>
            <Route path='/portfolio/contact'element={<Contact/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
