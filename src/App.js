import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import {GlobalStyles} from './globalStyles';
import Hero from './components/Hero';
function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Hero />
    </Router>
  );
}

export default App;
