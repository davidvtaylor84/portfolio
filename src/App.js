import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
<<<<<<< HEAD
import Homepage from './components/Homepage';
import PythonProject from './components/PythonProject';
import NavBar from './components/NavBar';
import JavaScriptProject from './components/JavaScriptProject';
import JavaProject from './components/JavaProject';
import MyCV from './components/MyCV';
=======
import Header from './components/Header';
>>>>>>> 25156a1a065d4cb0353724007c6ec0f42982e1cb

function App() {
  return (
    <>
      <Router>
<<<<<<< HEAD
        <NavBar/>
          <Routes>
            <Route path='/portfolio' element={<Homepage/>}/>
            <Route path='/portfolio/python'element={<PythonProject/>}/>
            <Route path='/portfolio/javascript'element={<JavaScriptProject/>}/>
            <Route path='/portfolio/java'element={<JavaProject/>}/>
            <Route path='/portfolio/cv'element={<MyCV/>}/>
=======
        <Header/>
          <Routes>
            
>>>>>>> 25156a1a065d4cb0353724007c6ec0f42982e1cb
          </Routes>
      </Router>
    </>
  );
}

export default App;
