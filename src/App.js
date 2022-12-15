import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';



function App() {
  return (
    <>
      <Router>
        <NavBar/>
          <Routes>
            <Route path='/portfolio' element={<Homepage/>}/>
            <Route path='/about' element={<AboutMe/>}/>
            <Route path='/myprojects' element={<MyProjects/>}/>
            <Route path='/portfolio/contact'element={<Contact/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
