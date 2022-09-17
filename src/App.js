import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route  path='/' element={<Signup/>}/>
        <Route  path='/signin' element={<Signin/>}/>
        <Route  path='/admindashboard' element={<AdminDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
