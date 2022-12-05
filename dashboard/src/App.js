import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link, Navigate  } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Login />}></Route>
          <Route path='Home' element={<Home />}></Route>
          <Route path='*' element={<Navigate to={"/Login"} />}></Route>
        </Routes>
      </BrowserRouter>
        {/* <Login /> */}
    </div>
  )
}

export default App