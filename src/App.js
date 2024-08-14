import './stylesheets/App.css';
import Header from './components/Header'
import Bio from './components/Bio'
import Projects from './components/Projects';
import Footer from './components/Footer'
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Header />  
      <Routes>  
        <Route path='/about' element={<Bio />} />
        <Route path='/' element={<Projects />} />
      </Routes>
      {/* <Footer /> */}
    </HashRouter>
  );
}

export default App;
