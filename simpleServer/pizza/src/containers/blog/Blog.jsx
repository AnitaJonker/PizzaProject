import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import './blog.css'


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        ...sx,
      }}
      {...other}
    />
  );
}

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
    
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >

           {props.books.map((book) => { 
          return <div key={book.id}>
          <Paper elevation={3}>{book.title} </Paper>
          <Paper elevation={3}>{book.description}</Paper>
        </div>
     })}
      </Box>
    </div>
  );
}

export default Blog