import './App.css';
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import AboutMe from './pages/about-me/AboutMe'
import Projects from './pages/projects/Project'
import ContactMe from './pages/contactme/ContactMe'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/portfolio' element={<Projects />} />
        <Route path='/contact-me' element={<ContactMe />} />
        {/* <Route path='/resume' element={<Resume />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
