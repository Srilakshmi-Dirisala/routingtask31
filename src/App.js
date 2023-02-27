import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/About' element={<About/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
