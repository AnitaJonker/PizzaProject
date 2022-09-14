import React, { useEffect, useState } from 'react'
import {Footer,Blog,Possibility, Features, WhatGPT3,Header} from './containers'
import {CTA,Brand,Navbar,Books__Comp} from './components';
import './App.css';
import axios from 'axios';


const API_URL = 'http://localhost:3000/travel';
//const API_URL = 'http://localhost:3000/api/v1/books';

async function getAPIData() {
  const response = await axios.get(API_URL);
  return response.data;
}

  function App(){
  const [trelloDetails,setTrello] = useState([]);
  
  
  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if(mounted){
        setTrello(items);
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
     { <Navbar/>}
   
     </div>
     <Blog trello={trelloDetails} /> 
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

