import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './componnets/Footer';
import Auth from './componnets/Auth';


function App() {
  return (
    <div>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/register' element={<Auth register />}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/login' element={<Auth />}/>
     <Route path='/projects' element={<Projects/>}/>
    </Routes>
    <Footer/>
     </div>
 
  );
}

export default App;
