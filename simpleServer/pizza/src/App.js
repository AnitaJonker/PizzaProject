import React, { useEffect, useState } from 'react'
import {Footer,Blog,Possibility, Features, WhatGPT3,Header} from './containers'
import {CTA,Brand,Navbar,Books__Comp} from './components';
import './App.css';
import axios from 'axios';


const API_URL = 'http://localhost:3000/api/v1/books';

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}


  function App(){
  const [books,setBooks] = useState([]);
  
  
  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if(mounted){
        setBooks(items);
        console.log(items + 'test');
      }
    });
    
    return () => (mounted = false);
}, []);

  
  return (
    <div className="App">
      {/* <Books__Comp books={books} /> */}
     <div className='background-image'>
     <div className="gradient__bg">
   
     {/* <Books__Comp books={books} /> */}
     <Navbar />
   
     </div>
     <Blog books={books} /> 
     </div>
     
     </div>
      
    //   {/* <Brand />
    //   <WhatGPT3 />
    //   <Features />
    //   <Possibility />
    //   <CTA /> */}
     


    
    //   {/* <Footer /> */}
    // </div>
  );
};

export default App

