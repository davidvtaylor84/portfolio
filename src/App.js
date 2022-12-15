import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from './components/Homepage';
import PythonProject from './components/PythonProject';
import NavBar from './components/NavBar';
import JavaScriptProject from './components/JavaScriptProject';
import JavaProject from './components/JavaProject';
<<<<<<< HEAD
import MyCV from './components/MyCV';
=======
import Contact from './components/Contact';

>>>>>>> e586a8fab094234c51203b5d62106647330949ac

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
<<<<<<< HEAD
            <Route path='/portfolio/cv'element={<MyCV/>}/>
=======
            <Route path='/portfolio/contact'element={<Contact/>}/>
>>>>>>> e586a8fab094234c51203b5d62106647330949ac
          </Routes>
      </Router>
    </>
  );
}

export default App;
