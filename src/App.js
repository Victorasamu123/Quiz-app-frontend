import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route  path='/' element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
