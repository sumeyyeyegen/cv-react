
import './App.css';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'
import Home from './pages/Home/index';
import Experiences from './pages/Experiences/index'
import Skills from './pages/Skills/index'
import Educations from './pages/Educations/index'
import Navbar from './components/Navbar/index';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/experiences' element={<Experiences />} />
            <Route path='/educations' element={<Educations />} />
            <Route path='/skills' element={<Skills />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
