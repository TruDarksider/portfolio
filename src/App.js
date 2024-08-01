import './stylesheets/App.css';
import Header from './components/Header'
import Bio from './components/Bio'
import Projects from './components/Projects';
import Footer from './components/Footer'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />  
      <Routes>  
        <Route path='about/' exact element={<Bio />} />
        <Route path='/' element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
