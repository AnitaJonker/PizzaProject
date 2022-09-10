import React from 'react'

//structure reference from Javascript Mastery
import {Footer,Blog,Possiblity, Features, WhatGPT3,Header} from './containers'
import {CTA,Brand,Navbar} from './components';

export const App = () => {
  return (
    <div className="App">
      <div className="greadient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};
