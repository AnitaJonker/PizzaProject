/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import './blog.css'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'



const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


// function Item(props) {
//   const { sx, ...other } = props;
//   return (
//     <Box
//       sx={{
//         p: 1,
//         m: 1,
//         ...sx,
//       }}
//       {...other}
//     />
//   );
// }

// import React from 'react'
// debugger;
// export const Books__Comp = (props) => {
//   return <div>
//     <h1>These books are from the API </h1>
//     {console.log(props.books)}
//     {props.books.map((book) => { 
//       return <div key={book.id}>
//       <h1>{book.title}</h1>
//       <p>{book.description}</p>
//       </div>
//     })}
// </div>;

// }
// export default Books__Comp;
export function Blog(props) {
  return (
    
    <div>
     

           {props.books.map((book) => { 
          return <div key={book.id}>
          <div class ='flex flex-col space-y-4 m-8'>
          <div class="border-solid border-2  max-w-md h-{10} text-center rounded bg-slate-50 shadow-md hover:shadow-sm p-8">
          <div> {book.title}</div>
          <div> {book.description}</div>
          </div>
          </div>
          <div class="container mx-auto" >
          <div class="">
         
         
          </div>
          </div>
          </div>
      })}
        


    </div>
  );
}








export default Blog


/*
   <h1>Hellow Div</h1>  
           <Paper  elevation={3}>{book.title} </Paper>
          {/* </div>}

          <Paper elevation={3}>{book.description}</Paper>
          <h1>Hellow Div</h1>

*/