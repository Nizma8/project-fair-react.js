import { Route, Routes } from 'react-router-dom';
import './App.css';
import Reg from './pages/Reg';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Footer from './componnets/Footer';


function App() {
  return (
    <div>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/register' element={<Reg/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/projects' element={<Projects/>}/>
    </Routes>
    <Footer/>
     </div>
 
  );
}

export default App;
