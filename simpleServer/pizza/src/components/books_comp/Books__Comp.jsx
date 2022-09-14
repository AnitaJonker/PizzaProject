import React from 'react'
debugger;
export const Books__Comp = (props) => {
  return <div>
    <h1>These books are from the API </h1>
    {console.log(props.books)}
    {props.books.map((book) => { 
      return <div key={book.id}>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      </div>
    })}
</div>;

}
export default Books__Comp;