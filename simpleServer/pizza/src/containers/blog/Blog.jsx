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
        <Paper elevation={3}>Trello card 1 </Paper>
        <Paper elevation={3}>Trello card 1</Paper>
        <Paper elevation={3}>Trello card 1</Paper>
      </Box>

    </div>
  );
}

export default Blog