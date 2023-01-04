import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';




function App() {
  return (
    <>
      <Router>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/about' element={<AboutMe/>}/>
            <Route path='/myprojects' element={<MyProjects/>}/>
            {/* <Route path='/sideprojects' element={<SideProjects/>}/> */}
            <Route path='/portfolio/contact'element={<Contact/>}/>
          </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
