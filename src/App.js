import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from './components/Homepage';
import PythonProject from './components/PythonProject';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
          <Routes>
            <Route path='/portfolio' element={<Homepage/>}/>
            <Route path='/portfolio/python'element={<PythonProject/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
