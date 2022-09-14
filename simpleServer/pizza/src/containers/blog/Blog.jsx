/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './blog.css'

export function Blog(props) {
  return (
    <div>
           {props.trello.map((trelloItem) => { 
          return <div key={trelloItem.name}>
          <div class ='flex flex-col space-y-4 m-8'>
          <div class="border-solid border-2  max-w-md h-{10} text-center rounded bg-slate-50 shadow-md hover:shadow-sm p-8">
          <div class='font-bold'> Board Name</div>
          <div> {trelloItem.name}</div>
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