import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Router/Navbar';
import HomePage from './Router/HomePage';
import About from './Router/About';
import Services from './Router/Services';
import Blog from './Router/Blog';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
