import React, { useEffect, useState } from 'react'
import {Footer,Blog,Possibility, Features, WhatGPT3,Header} from './containers'
import {CTA,Brand,Navbar} from './components';
import './App.css';
import axios from 'axios';



const API_URL = 'http://127.0.0.1:3000/';

async function getAPIData() {
  const response = await axios.get(API_URL);
  return response.data;
}

export  function App(){
  const [books,setBooks] = useState([]);
  
  
  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {

      if(mounted){

        setBooks(items);
      }
    });
    return () => (mounted = false);
}, []);

  
  return (
    
    <div className='background-image'>
    <div className="App">
      <div className="gradient__bg">
     <Books books={books} />
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

