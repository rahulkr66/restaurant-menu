import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import {GlobalStyles} from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Hero />
      <Products heading="Choose your favourite" data={productData} />
      <Footer/>
    </Router>
  );
}

export default App;
