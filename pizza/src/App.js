import React from 'react'

//structure reference from Javascript Mastery
import {Footer,Blog,Possibility, Features, WhatGPT3,Header} from './containers'
import {CTA,Brand,Navbar} from './components';
import './App.css';

export const App = () => {
  return (
    <div className='background-image'>
    <div className="App">
      <div className="gradient__bg">
     
        <Navbar />
      </div>
      
      {/* <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA /> */}
      <Blog />


      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App