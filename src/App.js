
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login/Login';
import Notfound from './Components/NotFound/Notfound';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Header from './Shared/Header/Header';
import About from './Components/About/About';
import Signup from './Components/Auth/Signup/Signup';

import Services from './Components/Home/Services/Services';
import Footer from './Shared/Footer/Footer';


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
        } ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path='*' element={<Notfound></Notfound>} ></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
