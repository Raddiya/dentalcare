
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar.js/Navbar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services'; 
import Login from './Components/Login/Login';
import Notfound from './Components/NotFound/Notfound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
       <Route path='/Services' element={<Services></Services>}></Route>
       <Route path='/Login' element={<Login></Login>}></Route>
       <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
