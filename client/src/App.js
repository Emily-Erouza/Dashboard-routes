import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';
import Names from './components/Names';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Route, Router, Routes, } from "react-router-dom";
import MainRoutes from './components/MainRoutes';
import displayData from './components/displayData';
import './App.css';

function App() {
  return (
    <div className="home">
    
     <BrowserRouter>
     <Navbar/>
     <Home/>
     
     <MainRoutes />

     </BrowserRouter>


    <div>
      <Books/>
     <Names/>
     <Dashboard/>
     <displayData/>
    </div>
    </div>
   




  );
}

export default App;




