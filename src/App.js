import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import About from './components/about';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
          <Route path='/' element={ <Landing /> } />
          <Route path='/resume' element={ <Resume /> } />
          <Route path='/portfolio' element={ <Portfolio /> } />
          <Route path='/about' element={ <About /> } />
      </Routes>
  );
}

export default App;
