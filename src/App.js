
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import Notfound from './Components/NotFound/Notfound';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path='/services' element={
          <RequireAuth>
            <Services />
          </RequireAuth>
        }></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
