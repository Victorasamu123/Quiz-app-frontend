import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <>
      <Routes>
        <Route  path='/' element={<Signup/>}/>
        <Route  path='/signin' element={<Signin/>}/>
      </Routes>
    </>
  );
}

export default App;
