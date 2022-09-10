import React from 'react'

//structure reference from Javascript Mastery
import {Footer,Blog,Possibility, Features, WhatGPT3,Header} from './containers'
import {CTA,Brand,Navbar} from './components';
//import Button from '@mui/material/Button';

export const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App