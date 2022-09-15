import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Router>
        <Route  path='/' element={<Signup/>}/>
      </Router>
    </>
  );
}

export default App;
