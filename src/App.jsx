import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Pix from './components/pages/Pix';
import Navbar from './components/layout/Navbar';
import Teste from './components/pages/teste';

function App() {
  return (
  <Router>
  <Navbar/>
    <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/pix' element={<Pix />}/>
     <Route path='/teste' element={<Teste />} />
    </Routes>
  </Router>
  );
}

export default App;
